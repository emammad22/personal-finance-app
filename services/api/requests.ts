import { instance } from ".";

const postData = async (path: string, arg: any) => (await instance.post(path, arg)).data;


export {postData}