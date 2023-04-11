import { createClient } from '@supabase/supabase-js'

const URL = 'https://tgkaidwkrjynszuuhmod.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRna2FpZHdrcmp5bnN6dXVobW9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4MzUzMTUsImV4cCI6MTk5NjQxMTMxNX0.5U5Aw4_2AOdR13wJpI8-NGdr9jBTcD9JFAu9Jg70Wqs';

export const supabase = createClient(URL, API_KEY);