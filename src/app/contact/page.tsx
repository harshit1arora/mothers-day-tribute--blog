'use client';

import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {useRouter} from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-200 to-pink-100">
      <Card className="w-full max-w-4xl shadow-xl rounded-2xl overflow-hidden">
        <CardHeader className="p-6">
          <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
            Contact Us
          </CardTitle>
          <CardDescription className="text-gray-700">
            We'd love to hear from you!
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Enter your name" type="text"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="Enter your email" type="email"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us what's on your mind"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="p-6 flex justify-between items-center">
          <Button className="bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-300">
            Send Message
          </Button>
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            Go Back
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
