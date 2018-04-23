#!/usr/bin/python

import subprocess
import os
import urllib
import sys
import datetime
import syslog
import platform
from distutils.version import LooseVersion

def main():
    serial = 12345
    key= 1234
    macname = "gavin-mbp"
    username = "gavin"
    theurl = "127.0.0.1:8000"

    mydata = [
        ('serial', serial), ('recovery_password', key),
        ('username', username), ('macname', macname)
    ]
    mydata = urllib.urlencode(mydata)
    cmd = ['/usr/bin/curl', '--data', mydata, theurl]


if __name__ == '__main__':
    main()
