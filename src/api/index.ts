import axios from "axios";
import { createClient } from '@supabase/supabase-js'

const baseUrl = "https://verify.codeforgovtech.in";
const supabase = createClient("https://kcavhjwafgtoqkqbbqrd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjYXZoandhZmd0b3FrcWJicXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5NTQxMzIsImV4cCI6MjAwMDUzMDEzMn0.8PKGvntMY7kw5-wmvG2FBOCxf-OrA2yV5fnudeA6SVQ")

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
