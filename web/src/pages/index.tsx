/*interface HomeProps {
  count: number;
}*/
import Image from 'next/image';
import  appPreviewImg  from '../assets/nlw-copa-preview.png';
import logoImg from '../assets/logo.svg';

export default function Home() {
  return (
    <div>
      <main>
        <Image src={logoImg} alt="NLW Copa"/>
      </main>

      <Image 
        src={appPreviewImg} 
        alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW copa"
        quality={100}
      />
    </div>    
  );
}


/*export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count');
  const data = await response.json();


  return {
    props: {
      count: data.count,
    }
  }
}*/
