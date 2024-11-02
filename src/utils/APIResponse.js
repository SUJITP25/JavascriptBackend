class APIResponse{
    constructor(statusCode,data,message="success"){
        this.statusCode=statusCode 
        this.data = data
        this.messaage - message 
        this.sucesss =statusCode <400 
    }
}