/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {jsonLiteral} from '../../../../src/json';

const NIELSEN_CONFIG = jsonLiteral({
  'vars': {
    'sessionId': 'CLIENT_ID(imrworldwide)',
    'prefix': '',
  },
  'requests': {
    'session':
      'https://${prefix}uaid-linkage.imrworldwide.com/cgi-bin/gn?prd=session&c13=asid,P${apid}&sessionId=${sessionId}_${pageViewId}&pingtype=4&enc=false&c61=createtm,${timestamp}&rnd=${random}',
    'cloudapi':
      'https://${prefix}cloudapi.imrworldwide.com/nmapi/v2/${apid}/${sessionId}_${pageViewId}/a?b=%7B%22devInfo%22%3A%7B%22devId%22%3A%22${sessionId}_${pageViewId}%22%2C%22apn%22%3A%22${apn}%22%2C%22apv%22%3A%22${apv}%22%2C%22apid%22%3A%22${apid}%22%7D%2C%22metadata%22%3A%7B%22static%22%3A%7B%22type%22%3A%22static%22%2C%22section%22%3A%22${section}%22%2C%22assetid%22%3A%22${pageViewId}%22%2C%22segA%22%3A%22${segA}%22%2C%22segB%22%3A%22${segB}%22%2C%22segC%22%3A%22${segC}%22%2C%22adModel%22%3A%220%22%2C%22dataSrc%22%3A%22cms%22%7D%2C%22content%22%3A%7B%7D%2C%22ad%22%3A%7B%7D%7D%2C%22event%22%3A%22playhead%22%2C%22position%22%3A%22${timestamp}%22%2C%22data%22%3A%7B%22hidden%22%3A%22${backgroundState}%22%2C%22blur%22%3A%22${backgroundState}%22%2C%22position%22%3A%22${timestamp}%22%7D%2C%22type%22%3A%22static%22%2C%22utc%22%3A%22${timestamp}%22%2C%22index%22%3A%22${requestCount}%22%2C%22pageURL%22%3A%22${ampdocUrl}%22%7D',
  },
  'triggers': {
    'visible': {
      'on': 'visible',
      'request': ['session', 'cloudapi'],
    },
    'hidden': {
      'on': 'hidden',
      'request': 'cloudapi',
    },
    'duration': {
      'on': 'timer',
      'timerSpec': {
        'interval': 10,
        'maxTimerLength': 86400,
        'immediate': false,
      },
      'request': 'cloudapi',
    },
  },
  'transport': {
    'beacon': false,
    'xhrpost': false,
    'image': true,
    'referrerPolicy': 'no-referrer',
  },
});

export {NIELSEN_CONFIG};
