<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <title>Laravel React JS SPA</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" id="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('css/patients/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">

</div>
<script src="{{ asset('js/patients/app.js') }}"></script>
</body>
</html>