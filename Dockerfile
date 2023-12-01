FROM alpine:3.18.5
RUN apk update
RUN apk add openjdk17
RUN apk add python3 py3-pip
RUN apk add jupyter-notebook
RUN pip install kotlin-jupyter-kernel 
# RUN pip install jupyter-console
RUN mkdir -p /notebooks
WORKDIR /notebooks
COPY libs /ktlibs
ENV JUPYTER_OPTIONS="--allow-root --NotebookApp.allow_origin='*' --NotebookApp.ip=0.0.0.0"
EXPOSE 8888
CMD jupyter notebook $JUPYTER_OPTIONS
