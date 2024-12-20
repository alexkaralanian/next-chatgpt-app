import Chat from './components/Chat';
import { Separator } from '@/components/ui/separator';
import { auth } from '../auth';

export default async function Home() {
  const session = await auth();

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Welcome To GPT Chat</h1>
      {!session?.user?.email && <div>You need to log in to use this chat.</div>}
      {session?.user?.email && (
        <>
          <Separator className="my-5" />
          <Chat />
        </>
      )}
    </main>
  );
}
