export interface ApiResponse {
  success: boolean;
  message: string;
  error?: object;
  data?: object;
}
