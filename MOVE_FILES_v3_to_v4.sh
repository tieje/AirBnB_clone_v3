#!/bin/bash
cp -R web_flask/static/ /web_dynamic/static/
cp web_flask/__init__.py web_dynamic/__init__.py
cp web_flask/templates/100-hbnb.html web_dynamic/templates/0-hbnb.html
cp web_flask/100-hbnb.py web_dynamic/0-hbnb.py
