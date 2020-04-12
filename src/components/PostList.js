import React , { Component } from 'react';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import Post from './Post';

class PostList extends Component {
    
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: `http://localhost:8080/${profile1}`
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: `http://localhost:8080/${profile2}`
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: `http://localhost:8080/${profile1}`
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: `http://localhost:8080/${profile2}`
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: `http://localhost:8080/${profile2}`
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: `http://localhost:8080/${profile1}`
        },
        date: "04 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus congue ligula, sed vestibulum risus pulvinar eget. Etiam ante velit, eleifend sit amet volutpat et, mattis at ex. In sagittis augue nisl, eu sollicitudin ex convallis sed. Nulla volutpat, ante dictum porttitor dignissim, odio erat commodo quam, et consequat urna libero eu ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Vivamus congue lacus eget tempor malesuada. Curabitur et aliquet purus. Cras congue nisl sit amet vestibulum bibendum. Nunc risus mauris, rhoncus ac pretium a, hendrerit ac nulla. Aliquam erat volutpat. Quisque fermentum ante ut fermentum maximus. Integer fringilla sodales auctor. Curabitur gravida dui a urna dignissim, ac consequat odio vulputate. Phasellus bibendum, justo id finibus aliquam, neque orci sagittis purus, sed tristique lectus dolor ut augue.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: `http://localhost:8080/${profile2}`
            },
            content: "Tullam non vehicula purus, non imperdiet sem. Curabitur vel mauris non turpis porta faucibus et consectetur nunc. Nam et tempus libero, vitae vulputate leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: `http://localhost:8080/${profile2}`
            },
            content: "Tullam non vehicula purus, non imperdiet sem. Curabitur vel mauris non turpis porta faucibus et consectetur nunc. Nam et tempus libero, vitae vulputate leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        ]
      },
    ]
  };
  
  render() {
    return (
      <>
        {this.state.posts.map(post => <Post key={post.id} data={post}/>)}
      </>
    )
  }


}

export default PostList;