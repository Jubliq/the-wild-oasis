import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lredzdddnabbriibcoyc.supabase.co";
const supabaseKey = "sb_publishable_EZtD-VH1QxkfFnxSBixKLw_bREd0h_-";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
