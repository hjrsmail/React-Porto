import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleAlert } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
      {
            title: 'Create a New Products',
            href: '/products/create',
      },
];

export default function Products() {

      const { data, setData, post, processing, errors } = useForm({
            name: '',
            price: '',
            description: '',
      });

      const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            post(route('products.store'));
            // console.log(data);
      }

      return (
            <AppLayout breadcrumbs={breadcrumbs}>
                  <Head title="Products" />
                  <div className="mx-auto max-w-screen-xl w-8/12 p-5">
                        <form onSubmit={handleSubmit} className='space-y-4'>

                              {/* Error Display */}
                              {Object.keys(errors).length > 0 && (
                                    <Alert>
                                          <CircleAlert className="h-4 w-4" />
                                          <AlertTitle>Errors!</AlertTitle>
                                          <AlertDescription>
                                                <ul>
                                                      {Object.entries(errors).map(([key, message]) => 
                                                            <li key={key}>{message as string}</li>                                                      
                                                      )}
                                                </ul>
                                          </AlertDescription>
                                    </Alert>
                              )}

                              <div className="">
                                    <Label htmlFor='product name'>Name</Label>
                                    <Input placeholder='Product Name' value={data.name} onChange={(e) => setData('name', e.target.value)} ></Input>
                              </div>
                              <div className="">
                                    <Label htmlFor='product price'>Price</Label>
                                    <Input placeholder='Price' value={data.price} onChange={(e) => setData('price', e.target.value)}></Input>
                              </div>
                              <div className="">
                                    <Label htmlFor='description'>Description</Label>
                                    <Textarea placeholder='Description' value={data.description} onChange={(e) => setData('description', e.target.value)}></Textarea>
                              </div>
                              <div className="">
                                    <Button type='submit'>Add a Product</Button>
                              </div>
                        </form>
                  </div>
            </AppLayout>
      );
}
