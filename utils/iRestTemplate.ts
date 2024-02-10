export interface iRestTemplate {
    get<T>(url: string, params?: any, headers?: any): Promise<T>;
    post<T>(url: string, body?: any, headers?: any): Promise<T>;
    put<T>(url: string, body?: any, headers?: any): Promise<T>;
  }