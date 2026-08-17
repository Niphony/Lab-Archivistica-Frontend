#!/usr/bin/env bash
set -eu

cores_dir=/var/solr/data
for core in authority oai qaevent search statistics suggestion audit; do
  core_dir="${cores_dir}/${core}"
  mkdir -p "${core_dir}/conf"
  config_source="/opt/solr/server/solr/configsets/${core}/conf"
  cp -a "${config_source}/." "${core_dir}/conf/"
  touch "${core_dir}/core.properties"
  chown -R solr:solr "${core_dir}"
  echo "Initialized DSpace Solr core: ${core}"
done

exec solr-foreground
