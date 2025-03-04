import { instance } from ".";

const postData = async (path: string, arg: any) => (await instance.post(path, arg)).data;
const getData = async (path: string) => (await instance.get(path)).data;


export {postData, getData}