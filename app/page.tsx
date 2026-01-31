import { redirect } from 'next/navigation'
import { sdk } from '@farcaster/miniapp-sdk';
import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
        sdk.actions.ready();
    }, []);

  redirect('/home')
}
