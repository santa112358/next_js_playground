import Link from 'next/link';
import '../styles/styles';

export default function Index() {
  return (
    <body>
      <h1 style={h1}>NBA ALL STAR</h1>
      <h1>This is hot reload</h1>
      <Link href="/next">
      <a>to next page</a>
      </Link>
    </body>
  );
}

const h1 = {
    fontSize : '102pt',
    fontWeight : 'bold',
    
}
