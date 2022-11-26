import Image from 'next/image';
import  appPreviewImg  from '../assets/nlw-copa-preview.png';
import logoImg from '../assets/logo.svg';
import usersAvatarExampleImg from '../assets/avatares.png';

/* ======= Home ======= */
export default function Home() {
  return (
    <div>
      <main>
        <Image src={logoImg} alt="NLW Copa"/>

        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div>
          <Image src={usersAvatarExampleImg} alt="" />
          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form>
          <input type="text" required placeholder='Qual nome do seu bolão' />
          <button type='submit'>Criar meu bolão</button>
        </form>
      </main>

      <Image 
        src={appPreviewImg} 
        alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW copa"
        quality={100}
      />
    </div>    
  );
}













/*interface HomeProps {
  count: number;
}*/

/*export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count');
  const data = await response.json();


  return {
    props: {
      count: data.count,
    }
  }
}*/
