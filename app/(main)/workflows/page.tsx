"use client";

import DashboardCard from "@/components/dashboard/DashboardCard";
import Flow from "@/components/workflows/Flow";
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea"

import { FileCog } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// import dynamic from "next/dynamic"
import { useEffect, useState } from "react";
// const jsYaml = dynamic(() => import('js-yaml'), { ssr: false });

export default async function App() {

  
  useEffect(() => {
    const loadYaml = async () => {
      const yaml = await import('js-yaml'); // Dynamically import js-yaml

      const data = `
        
---  # yaml document beginning
# comment syntax

# Basic syntax - key and value separated by colon and space before the value
key: value

# Scalar data types
integerValue: 1                     # integer value
octalNumber: 0123                     # Octal Numeric vale
hexaNumber: 0x4dea1                     # Hexa Decimal Numeric vale

floatingValue: 1                     # floating vale

stringValue: "456"                   # string with double quotes
stringValue: 'abc'                  # string with single quotes
stringValue: wer                   # string without quotes

booleanValue:true                   # boolean values - true or false


# Multiline string with literal block syntax -preserved new lines
string1: |
   Line1
   line2
   "line3"
  line4

# Multiline strings with folded block syntax - new lines are not preserved, leading and trailing spaces are ignored
  string1: >
   Line1
   line2
   "line3"
  line4
# Collection sequence data types
 # sequence ArrayList example
 - One
 - two
 - Three

  # Another way of sequence  syntax example
  [one, two, three]

### dictionary
  mysqldatabase:
    hostname: localhost
    port: 3012
    username: root
    password: root
      `;

      yaml.loadAll(data, (doc:any) => {
        console.log(doc);
      });
    };

    loadYaml();
  }, []);
  
  const renderYMLToJson = (data:string) => {
    yaml.loadAll(data, function (doc: any) {
      console.log(doc);
    });
  }
  return (
    <>
      <Flow />
      <div className='flex flex-col md:flex-row p-2 mt-4'>
        <button className='bg-slate-800 hover:bg-blue-700 text-white font-bold p-3 m-2 rounded text-xs w-32'>
          Edit Workflow
        </button>
        <button className='bg-slate-800 hover:bg-blue-700 text-white font-bold p-3 m-2 rounded text-xs w-32'>
          Add Node
        </button>
        <button className='bg-slate-800 hover:bg-blue-700 text-white font-bold p-3 m-2 rounded text-xs w-32'>
          Paste code
        </button>
        <button className='bg-green-800 hover:bg-blue-700 text-white font-bold p-3 m-2 rounded text-xs w-32'>
          Save Workflow
        </button>
        <button className='bg-red-800 hover:bg-blue-700 text-white font-bold p-3 m-2 rounded text-xs w-32'>
          Save Workflow
        </button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Import YAML File</Button>
          </DialogTrigger>
          <DialogContent className="min-w-96">
            <DialogHeader>
              <DialogTitle>Import YAML code</DialogTitle>
              <DialogDescription>
                Paste your YAML code below
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Textarea onChange={(e) => renderYMLToJson(e.target.value)} placeholder="Paste YAML code here ..." />
              </div>

            </div>
            <DialogFooter className="sm:justify-start">
              <Button type="submit" size="sm" className="px-3">
                Save workflow
                <span className="sr-only">Import</span>
                <FileCog className="h-4 w-4" onClick={renderYMLToJson} />
              </Button>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      
    </>
  );
}
