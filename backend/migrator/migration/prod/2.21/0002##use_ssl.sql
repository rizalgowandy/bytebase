UPDATE data_source SET options = options || '{"useSsl": true}'::jsonb WHERE ssl_ca != '';