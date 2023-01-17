/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://rhyming-nature.gptcperinthamanna.in';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'vercel';
export const BRAND_NAME = 'GPTC Perinthalmanna';
export const TITLE = 'Rhyming Nature';
export const SITE_NAME_MULTILINE = ['Rhyming', 'Nature'];
export const SITE_NAME = 'Rhyming Nature';
export const META_DESCRIPTION =
  'Rhyming nature international poetry festival event is conducted by Govt Polytechnic college Perinthalmnna and National Digital Library of India Club';
export const SITE_DESCRIPTION =
  'International poetry reading experience with the best poets in the world';
export const DATE = '29 January 2023';
export const SHORT_DATE = 'Jan 29 - 5:00am IST';
export const FULL_DATE = 'Jan 29th 5pm Indian Standerd Time (GMT+5:30)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/vercel/virtual-event-starter-kit';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Inauguration',
    route: '/stage/inauguration'
  },
  // {
  //   name: 'Vercel Stage',
  //   route: '/stage/c'
  // },
  {
    name: 'Recitation Section',
    route: '/stage/recitation'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Hosts',
    route: '/expo'
  }
];

export type TicketGenerationState = 'default' | 'loading';
