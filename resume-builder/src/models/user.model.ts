import mongoose, { Schema } from "mongoose";
import { IUser } from "@/types/user.types";
import bcrypt from "bcrypt";

interface UserDocument extends Omit<IUser, "_id">, Document {
  comparePass(userPassword: string): boolean;
}

const UserSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: [true, "Name must be required"],
    },
    email: {
      type: String,
      required: [true, "Email must be required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password must be required"],
      minlength: [6, "Min 6 characters required"],
    },
    mobile: {
      type: String,
      minlength: [10, "min 10 characters required"],
      maxlength: [10, "max 10 characters required"],
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre("save", function (): void {
  if (!this.isModified("password")) return;

  this.password = bcrypt.hashSync(this.password, 10);
});

UserSchema.methods.comparePass = function (userPassword: string): boolean {
  return bcrypt.compareSync(userPassword, this.password);
};

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
