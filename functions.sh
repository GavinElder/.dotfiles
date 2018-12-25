#!/usr/bin/env bash
#
# The following is a collection of small scripts / functions
#



# Connect to a TLS endpoint, and dump meta-data.
# Usage:
#     http-cert <endpoint>
# Example:
#     http-cert improbable.io:443
function tls-info() {
  echo -n | openssl s_client -connect "$1"
}
