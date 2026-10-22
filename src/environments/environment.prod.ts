export const environment = {
  production: true,
  appName: 'Ngoại Ngữ Nghiêm Linh',
  apiUrl: '/api',
  supabase: {
    url: typeof process !== 'undefined' && process.env?.['SUPABASE_URL'] 
      ? process.env['SUPABASE_URL'] 
      : 'https://production-placeholder.supabase.co',
    anonKey: typeof process !== 'undefined' && process.env?.['SUPABASE_ANON_KEY']
      ? process.env['SUPABASE_ANON_KEY']
      : 'production-anon-key'
  }
};
