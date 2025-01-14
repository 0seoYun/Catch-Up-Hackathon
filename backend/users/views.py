from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import *
from .serializers import *

# user create
@api_view(['GET', 'POST'])
def user_list_create(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)

        return Response(data=serializer.data)
    
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(data=serializer.data)

# user detail, update, delete
@api_view(['GET', 'PATCH', 'DELETE'])
def user_rud(request, user_pk):
    user = get_object_or_404(User, pk=user_pk)

    # /id값/ 검색 시 해당 객체 출력
    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)

    # 객체 수정
    elif request.method == 'PATCH':
        serializer = UserSerializer(instance=user, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

    elif request.method == 'DELETE':
        user.delete()
        data={
            'user' : user_pk
        }
        return Response(data)

# profile
@api_view(['GET'])
def user_profile(request, user_id):
    user = User.objects.get(pk=user_id)
    if request.method == 'GET':
        profile = Profile.objects.get(user=user)
        serializer = ProfileSerializer(profile)
        return Response(data=serializer.data)

# profile update
@api_view(['GET', 'PATCH'])
def profile_update(request, user_id):
    user = User.objects.get(pk=user_id)
    if request.method == 'GET':
        profile = Profile.objects.get(user=user)
        serializer = ProfileSerializer(profile)
        return Response(data=serializer.data)
    elif request.method == 'PATCH':
        profile = Profile.objects.get(user=user)
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(data=serializer.data)

# user모델이 삭제되면 profile이 자동 삭제됨으로 삭제 구현 X