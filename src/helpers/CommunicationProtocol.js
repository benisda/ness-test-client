import { API_URL } from "../consts";

const B = 2;
const M = 19;
const S = Math.floor(Math.random() * 1000);
// const S = 8;

export const getDHKey = async () => {
    const step1 = Math.pow(B, S) % M;
    const res = await fetch(API_URL + "/exchangeAB", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            clientStep1: step1
        })
    });
    const { serverStep1 } = await res.json();
    const step2 = Math.pow(serverStep1, S) % M;
    console.log("step2", step2);
}