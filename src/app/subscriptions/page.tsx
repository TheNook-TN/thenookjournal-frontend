import { cookies } from 'next/headers';

import SubscriptionsPage from '@/app/subscriptions/subscriptions_page';


const SubscriptionPage = () => {
  const cookieStore = cookies();
  const storedEmail = cookieStore.get('thenookjournal_email')?.value || null;

  return <SubscriptionsPage storedEmail={storedEmail} />;
};

export default SubscriptionPage;
