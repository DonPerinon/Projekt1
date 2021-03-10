FROM centos:7
RUN yum -y install deltarpm && yum -y update  && yum -y install epel-release && yum -y update &&  yum -y install ansible && yum -y install python && yum -y install python-pip && pip install boto boto3 botocore
CMD ["sleep", "infinity"]