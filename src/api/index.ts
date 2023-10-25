import axios from "axios";
import { createClient } from '@supabase/supabase-js'

const baseUrl = "https://verify.codeforgovtech.in";
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY)

export const verifyToken = async (token: any) => {
    try {
        const response = await axios.get(`${baseUrl}/inauguration/${token}`);
        return response;
    } catch (error) {
        return error;
    }
};

export const getProgress = async (token: any) => {
    try {
        const response = await axios.get(`${baseUrl}/inauguration/status/${token}`);
        return response;
    } catch (error) {
        return error;
    }
};

export const getCert = async (token: any) => {
    try {
        const response = await axios.post(`${baseUrl}/inauguration/cert`, {
            "name": "",
            "token": token
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const getLeaderboard = async () => {
    try {
        const response = await supabase
            .from('leaderboard')
            .select()
            .gt('points', 0)
            .order('points', { ascending: false })
        return response;
    } catch (error) {
        return error;
    }
};
