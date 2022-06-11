  type Post = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body?: string, 
  }
  
  
  let endereco: Post[] = [
    {
    postId: 1,
    id: 1,
    name: 'Rafael',
    email: 'email@email.com' 
    },
    {
    postId: 2,
    id: 2,
    name: 'Eduardo',
    email: 'email@email.com'      
    },
  ]


  console.log(endereco[1].email);
