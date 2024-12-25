// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.1
// 	protoc        (unknown)
// source: v1/environment_service.proto

package v1

import (
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	fieldmaskpb "google.golang.org/protobuf/types/known/fieldmaskpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type EnvironmentTier int32

const (
	EnvironmentTier_ENVIRONMENT_TIER_UNSPECIFIED EnvironmentTier = 0
	EnvironmentTier_PROTECTED                    EnvironmentTier = 1
	EnvironmentTier_UNPROTECTED                  EnvironmentTier = 2
)

// Enum value maps for EnvironmentTier.
var (
	EnvironmentTier_name = map[int32]string{
		0: "ENVIRONMENT_TIER_UNSPECIFIED",
		1: "PROTECTED",
		2: "UNPROTECTED",
	}
	EnvironmentTier_value = map[string]int32{
		"ENVIRONMENT_TIER_UNSPECIFIED": 0,
		"PROTECTED":                    1,
		"UNPROTECTED":                  2,
	}
)

func (x EnvironmentTier) Enum() *EnvironmentTier {
	p := new(EnvironmentTier)
	*p = x
	return p
}

func (x EnvironmentTier) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (EnvironmentTier) Descriptor() protoreflect.EnumDescriptor {
	return file_v1_environment_service_proto_enumTypes[0].Descriptor()
}

func (EnvironmentTier) Type() protoreflect.EnumType {
	return &file_v1_environment_service_proto_enumTypes[0]
}

func (x EnvironmentTier) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use EnvironmentTier.Descriptor instead.
func (EnvironmentTier) EnumDescriptor() ([]byte, []int) {
	return file_v1_environment_service_proto_rawDescGZIP(), []int{0}
}

type GetEnvironmentRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// The name of the environment to retrieve.
	// Format: environments/{environment}
	Name          string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GetEnvironmentRequest) Reset() {
	*x = GetEnvironmentRequest{}
	mi := &file_v1_environment_service_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetEnvironmentRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetEnvironmentRequest) ProtoMessage() {}

func (x *GetEnvironmentRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_environment_service_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetEnvironmentRequest.ProtoReflect.Descriptor instead.
func (*GetEnvironmentRequest) Descriptor() ([]byte, []int) {
	return file_v1_environment_service_proto_rawDescGZIP(), []int{0}
}

func (x *GetEnvironmentRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type ListEnvironmentsRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Not used.
	// The maximum number of environments to return. The service may return fewer than
	// this value.
	// If unspecified, at most 10 environments will be returned.
	// The maximum value is 1000; values above 1000 will be coerced to 1000.
	PageSize int32 `protobuf:"varint,1,opt,name=page_size,json=pageSize,proto3" json:"page_size,omitempty"`
	// Not used.
	// A page token, received from a previous `ListEnvironments` call.
	// Provide this to retrieve the subsequent page.
	//
	// When paginating, all other parameters provided to `ListEnvironments` must match
	// the call that provided the page token.
	PageToken string `protobuf:"bytes,2,opt,name=page_token,json=pageToken,proto3" json:"page_token,omitempty"`
	// Show deleted environments if specified.
	ShowDeleted   bool `protobuf:"varint,3,opt,name=show_deleted,json=showDeleted,proto3" json:"show_deleted,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *ListEnvironmentsRequest) Reset() {
	*x = ListEnvironmentsRequest{}
	mi := &file_v1_environment_service_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ListEnvironmentsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListEnvironmentsRequest) ProtoMessage() {}

func (x *ListEnvironmentsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_environment_service_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListEnvironmentsRequest.ProtoReflect.Descriptor instead.
func (*ListEnvironmentsRequest) Descriptor() ([]byte, []int) {
	return file_v1_environment_service_proto_rawDescGZIP(), []int{1}
}

func (x *ListEnvironmentsRequest) GetPageSize() int32 {
	if x != nil {
		return x.PageSize
	}
	return 0
}

func (x *ListEnvironmentsRequest) GetPageToken() string {
	if x != nil {
		return x.PageToken
	}
	return ""
}

func (x *ListEnvironmentsRequest) GetShowDeleted() bool {
	if x != nil {
		return x.ShowDeleted
	}
	return false
}

type ListEnvironmentsResponse struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// The environments from the specified request.
	Environments []*Environment `protobuf:"bytes,1,rep,name=environments,proto3" json:"environments,omitempty"`
	// A token, which can be sent as `page_token` to retrieve the next page.
	// If this field is omitted, there are no subsequent pages.
	NextPageToken string `protobuf:"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3" json:"next_page_token,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *ListEnvironmentsResponse) Reset() {
	*x = ListEnvironmentsResponse{}
	mi := &file_v1_environment_service_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ListEnvironmentsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListEnvironmentsResponse) ProtoMessage() {}

func (x *ListEnvironmentsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_v1_environment_service_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListEnvironmentsResponse.ProtoReflect.Descriptor instead.
func (*ListEnvironmentsResponse) Descriptor() ([]byte, []int) {
	return file_v1_environment_service_proto_rawDescGZIP(), []int{2}
}

func (x *ListEnvironmentsResponse) GetEnvironments() []*Environment {
	if x != nil {
		return x.Environments
	}
	return nil
}

func (x *ListEnvironmentsResponse) GetNextPageToken() string {
	if x != nil {
		return x.NextPageToken
	}
	return ""
}

type CreateEnvironmentRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// The environment to create.
	Environment *Environment `protobuf:"bytes,1,opt,name=environment,proto3" json:"environment,omitempty"`
	// The ID to use for the environment, which will become the final component of
	// the environment's resource name.
	//
	// This value should be 4-63 characters, and valid characters
	// are /[a-z][0-9]-/.
	EnvironmentId string `protobuf:"bytes,2,opt,name=environment_id,json=environmentId,proto3" json:"environment_id,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *CreateEnvironmentRequest) Reset() {
	*x = CreateEnvironmentRequest{}
	mi := &file_v1_environment_service_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *CreateEnvironmentRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateEnvironmentRequest) ProtoMessage() {}

func (x *CreateEnvironmentRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_environment_service_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateEnvironmentRequest.ProtoReflect.Descriptor instead.
func (*CreateEnvironmentRequest) Descriptor() ([]byte, []int) {
	return file_v1_environment_service_proto_rawDescGZIP(), []int{3}
}

func (x *CreateEnvironmentRequest) GetEnvironment() *Environment {
	if x != nil {
		return x.Environment
	}
	return nil
}

func (x *CreateEnvironmentRequest) GetEnvironmentId() string {
	if x != nil {
		return x.EnvironmentId
	}
	return ""
}

type UpdateEnvironmentRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// The environment to update.
	//
	// The environment's `name` field is used to identify the environment to update.
	// Format: environments/{environment}
	Environment *Environment `protobuf:"bytes,1,opt,name=environment,proto3" json:"environment,omitempty"`
	// The list of fields to update.
	UpdateMask    *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=update_mask,json=updateMask,proto3" json:"update_mask,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *UpdateEnvironmentRequest) Reset() {
	*x = UpdateEnvironmentRequest{}
	mi := &file_v1_environment_service_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UpdateEnvironmentRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateEnvironmentRequest) ProtoMessage() {}

func (x *UpdateEnvironmentRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_environment_service_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateEnvironmentRequest.ProtoReflect.Descriptor instead.
func (*UpdateEnvironmentRequest) Descriptor() ([]byte, []int) {
	return file_v1_environment_service_proto_rawDescGZIP(), []int{4}
}

func (x *UpdateEnvironmentRequest) GetEnvironment() *Environment {
	if x != nil {
		return x.Environment
	}
	return nil
}

func (x *UpdateEnvironmentRequest) GetUpdateMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.UpdateMask
	}
	return nil
}

type DeleteEnvironmentRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// The name of the environment to delete.
	// Format: environments/{environment}
	Name          string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DeleteEnvironmentRequest) Reset() {
	*x = DeleteEnvironmentRequest{}
	mi := &file_v1_environment_service_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DeleteEnvironmentRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteEnvironmentRequest) ProtoMessage() {}

func (x *DeleteEnvironmentRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_environment_service_proto_msgTypes[5]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteEnvironmentRequest.ProtoReflect.Descriptor instead.
func (*DeleteEnvironmentRequest) Descriptor() ([]byte, []int) {
	return file_v1_environment_service_proto_rawDescGZIP(), []int{5}
}

func (x *DeleteEnvironmentRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type UndeleteEnvironmentRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// The name of the deleted environment.
	// Format: environments/{environment}
	Name          string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *UndeleteEnvironmentRequest) Reset() {
	*x = UndeleteEnvironmentRequest{}
	mi := &file_v1_environment_service_proto_msgTypes[6]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UndeleteEnvironmentRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UndeleteEnvironmentRequest) ProtoMessage() {}

func (x *UndeleteEnvironmentRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_environment_service_proto_msgTypes[6]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UndeleteEnvironmentRequest.ProtoReflect.Descriptor instead.
func (*UndeleteEnvironmentRequest) Descriptor() ([]byte, []int) {
	return file_v1_environment_service_proto_rawDescGZIP(), []int{6}
}

func (x *UndeleteEnvironmentRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type Environment struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// The name of the environment.
	// Format: environments/{environment}
	Name          string          `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	State         State           `protobuf:"varint,3,opt,name=state,proto3,enum=bytebase.v1.State" json:"state,omitempty"`
	Title         string          `protobuf:"bytes,4,opt,name=title,proto3" json:"title,omitempty"`
	Order         int32           `protobuf:"varint,5,opt,name=order,proto3" json:"order,omitempty"`
	Tier          EnvironmentTier `protobuf:"varint,6,opt,name=tier,proto3,enum=bytebase.v1.EnvironmentTier" json:"tier,omitempty"`
	Color         string          `protobuf:"bytes,7,opt,name=color,proto3" json:"color,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Environment) Reset() {
	*x = Environment{}
	mi := &file_v1_environment_service_proto_msgTypes[7]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Environment) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Environment) ProtoMessage() {}

func (x *Environment) ProtoReflect() protoreflect.Message {
	mi := &file_v1_environment_service_proto_msgTypes[7]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Environment.ProtoReflect.Descriptor instead.
func (*Environment) Descriptor() ([]byte, []int) {
	return file_v1_environment_service_proto_rawDescGZIP(), []int{7}
}

func (x *Environment) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Environment) GetState() State {
	if x != nil {
		return x.State
	}
	return State_STATE_UNSPECIFIED
}

func (x *Environment) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *Environment) GetOrder() int32 {
	if x != nil {
		return x.Order
	}
	return 0
}

func (x *Environment) GetTier() EnvironmentTier {
	if x != nil {
		return x.Tier
	}
	return EnvironmentTier_ENVIRONMENT_TIER_UNSPECIFIED
}

func (x *Environment) GetColor() string {
	if x != nil {
		return x.Color
	}
	return ""
}

var File_v1_environment_service_proto protoreflect.FileDescriptor

var file_v1_environment_service_proto_rawDesc = []byte{
	0x0a, 0x1c, 0x76, 0x31, 0x2f, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74,
	0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b,
	0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x1a, 0x1c, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x66,
	0x69, 0x65, 0x6c, 0x64, 0x5f, 0x62, 0x65, 0x68, 0x61, 0x76, 0x69, 0x6f, 0x72, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x19, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f,
	0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x20, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x66, 0x69, 0x65,
	0x6c, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x76,
	0x31, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x0f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0x4e, 0x0a, 0x15, 0x47, 0x65, 0x74, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f,
	0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x35, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x21, 0xe2, 0x41, 0x01, 0x02,
	0xfa, 0x41, 0x1a, 0x0a, 0x18, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x22, 0x78, 0x0a, 0x17, 0x4c, 0x69, 0x73, 0x74, 0x45, 0x6e, 0x76, 0x69, 0x72,
	0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b,
	0x0a, 0x09, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x08, 0x70, 0x61, 0x67, 0x65, 0x53, 0x69, 0x7a, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x70,
	0x61, 0x67, 0x65, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x09, 0x70, 0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x21, 0x0a, 0x0c, 0x73, 0x68,
	0x6f, 0x77, 0x5f, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x0b, 0x73, 0x68, 0x6f, 0x77, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x22, 0x80, 0x01,
	0x0a, 0x18, 0x4c, 0x69, 0x73, 0x74, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e,
	0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3c, 0x0a, 0x0c, 0x65, 0x6e,
	0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x18, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x45,
	0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x0c, 0x65, 0x6e, 0x76, 0x69,
	0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x26, 0x0a, 0x0f, 0x6e, 0x65, 0x78, 0x74,
	0x5f, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0d, 0x6e, 0x65, 0x78, 0x74, 0x50, 0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e,
	0x22, 0x83, 0x01, 0x0a, 0x18, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x45, 0x6e, 0x76, 0x69, 0x72,
	0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x40, 0x0a,
	0x0b, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x18, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31,
	0x2e, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x42, 0x04, 0xe2, 0x41,
	0x01, 0x02, 0x52, 0x0b, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x12,
	0x25, 0x0a, 0x0e, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e,
	0x6d, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x22, 0x99, 0x01, 0x0a, 0x18, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x40, 0x0a, 0x0b, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65,
	0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62,
	0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65,
	0x6e, 0x74, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x02, 0x52, 0x0b, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f,
	0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x3b, 0x0a, 0x0b, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x5f,
	0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65,
	0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4d, 0x61,
	0x73, 0x6b, 0x22, 0x51, 0x0a, 0x18, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x45, 0x6e, 0x76, 0x69,
	0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x35,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x21, 0xe2, 0x41,
	0x01, 0x02, 0xfa, 0x41, 0x1a, 0x0a, 0x18, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x53, 0x0a, 0x1a, 0x55, 0x6e, 0x64, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x35, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x42, 0x21, 0xe2, 0x41, 0x01, 0x02, 0xfa, 0x41, 0x1a, 0x0a, 0x18, 0x62, 0x79, 0x74, 0x65,
	0x62, 0x61, 0x73, 0x65, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e,
	0x6d, 0x65, 0x6e, 0x74, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x80, 0x02, 0x0a, 0x0b, 0x45,
	0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x28,
	0x0a, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x12, 0x2e,
	0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x74, 0x61, 0x74,
	0x65, 0x52, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c,
	0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x14,
	0x0a, 0x05, 0x6f, 0x72, 0x64, 0x65, 0x72, 0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x6f,
	0x72, 0x64, 0x65, 0x72, 0x12, 0x30, 0x0a, 0x04, 0x74, 0x69, 0x65, 0x72, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x1c, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31,
	0x2e, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x54, 0x69, 0x65, 0x72,
	0x52, 0x04, 0x74, 0x69, 0x65, 0x72, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x6c, 0x6f, 0x72, 0x18,
	0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x63, 0x6f, 0x6c, 0x6f, 0x72, 0x3a, 0x39, 0xea, 0x41,
	0x36, 0x0a, 0x18, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x1a, 0x65, 0x6e, 0x76,
	0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2f, 0x7b, 0x65, 0x6e, 0x76, 0x69, 0x72,
	0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x7d, 0x4a, 0x04, 0x08, 0x02, 0x10, 0x03, 0x2a, 0x53, 0x0a,
	0x0f, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x54, 0x69, 0x65, 0x72,
	0x12, 0x20, 0x0a, 0x1c, 0x45, 0x4e, 0x56, 0x49, 0x52, 0x4f, 0x4e, 0x4d, 0x45, 0x4e, 0x54, 0x5f,
	0x54, 0x49, 0x45, 0x52, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44,
	0x10, 0x00, 0x12, 0x0d, 0x0a, 0x09, 0x50, 0x52, 0x4f, 0x54, 0x45, 0x43, 0x54, 0x45, 0x44, 0x10,
	0x01, 0x12, 0x0f, 0x0a, 0x0b, 0x55, 0x4e, 0x50, 0x52, 0x4f, 0x54, 0x45, 0x43, 0x54, 0x45, 0x44,
	0x10, 0x02, 0x32, 0x86, 0x08, 0x0a, 0x12, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65,
	0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x93, 0x01, 0x0a, 0x0e, 0x47, 0x65,
	0x74, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x22, 0x2e, 0x62,
	0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x45, 0x6e,
	0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x18, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x45,
	0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x22, 0x43, 0xda, 0x41, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x8a, 0xea, 0x30, 0x13, 0x62, 0x62, 0x2e, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f,
	0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x67, 0x65, 0x74, 0x90, 0xea, 0x30, 0x01, 0x82, 0xd3,
	0xe4, 0x93, 0x02, 0x1b, 0x12, 0x19, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x3d,
	0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2f, 0x2a, 0x7d, 0x12,
	0x98, 0x01, 0x0a, 0x10, 0x4c, 0x69, 0x73, 0x74, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d,
	0x65, 0x6e, 0x74, 0x73, 0x12, 0x24, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e,
	0x76, 0x31, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65,
	0x6e, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x62, 0x79, 0x74,
	0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x45, 0x6e, 0x76,
	0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0x37, 0xda, 0x41, 0x00, 0x8a, 0xea, 0x30, 0x14, 0x62, 0x62, 0x2e, 0x65, 0x6e, 0x76,
	0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x6c, 0x69, 0x73, 0x74, 0x90, 0xea,
	0x30, 0x01, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x12, 0x12, 0x10, 0x2f, 0x76, 0x31, 0x2f, 0x65, 0x6e,
	0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x12, 0xa0, 0x01, 0x0a, 0x11, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74,
	0x12, 0x25, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x18, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61,
	0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e,
	0x74, 0x22, 0x4a, 0xda, 0x41, 0x00, 0x8a, 0xea, 0x30, 0x16, 0x62, 0x62, 0x2e, 0x65, 0x6e, 0x76,
	0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x90, 0xea, 0x30, 0x01, 0x98, 0xea, 0x30, 0x01, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1f, 0x3a, 0x0b,
	0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x22, 0x10, 0x2f, 0x76, 0x31,
	0x2f, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x12, 0xcc, 0x01,
	0x0a, 0x11, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d,
	0x65, 0x6e, 0x74, 0x12, 0x25, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76,
	0x31, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d,
	0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x18, 0x2e, 0x62, 0x79, 0x74,
	0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e,
	0x6d, 0x65, 0x6e, 0x74, 0x22, 0x76, 0xda, 0x41, 0x17, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e,
	0x6d, 0x65, 0x6e, 0x74, 0x2c, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x6d, 0x61, 0x73, 0x6b,
	0x8a, 0xea, 0x30, 0x16, 0x62, 0x62, 0x2e, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65,
	0x6e, 0x74, 0x73, 0x2e, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x90, 0xea, 0x30, 0x01, 0x98, 0xea,
	0x30, 0x01, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x34, 0x3a, 0x0b, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f,
	0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x32, 0x25, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x65, 0x6e, 0x76, 0x69,
	0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x6e, 0x61, 0x6d, 0x65, 0x3d, 0x65, 0x6e, 0x76,
	0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2f, 0x2a, 0x7d, 0x12, 0x9e, 0x01, 0x0a,
	0x11, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65,
	0x6e, 0x74, 0x12, 0x25, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31,
	0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65,
	0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74,
	0x79, 0x22, 0x4a, 0xda, 0x41, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x8a, 0xea, 0x30, 0x16, 0x62, 0x62,
	0x2e, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x64, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x90, 0xea, 0x30, 0x01, 0x98, 0xea, 0x30, 0x01, 0x82, 0xd3, 0xe4, 0x93,
	0x02, 0x1b, 0x2a, 0x19, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x3d, 0x65, 0x6e,
	0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2f, 0x2a, 0x7d, 0x12, 0xab, 0x01,
	0x0a, 0x13, 0x55, 0x6e, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f,
	0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x27, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65,
	0x2e, 0x76, 0x31, 0x2e, 0x55, 0x6e, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x45, 0x6e, 0x76, 0x69,
	0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x18,
	0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x45, 0x6e, 0x76,
	0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x22, 0x51, 0x8a, 0xea, 0x30, 0x18, 0x62, 0x62,
	0x2e, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x75, 0x6e,
	0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x90, 0xea, 0x30, 0x01, 0x98, 0xea, 0x30, 0x01, 0x82, 0xd3,
	0xe4, 0x93, 0x02, 0x27, 0x3a, 0x01, 0x2a, 0x22, 0x22, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x6e, 0x61,
	0x6d, 0x65, 0x3d, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2f,
	0x2a, 0x7d, 0x3a, 0x75, 0x6e, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x42, 0x11, 0x5a, 0x0f, 0x67,
	0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2d, 0x67, 0x6f, 0x2f, 0x76, 0x31, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_v1_environment_service_proto_rawDescOnce sync.Once
	file_v1_environment_service_proto_rawDescData = file_v1_environment_service_proto_rawDesc
)

func file_v1_environment_service_proto_rawDescGZIP() []byte {
	file_v1_environment_service_proto_rawDescOnce.Do(func() {
		file_v1_environment_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_v1_environment_service_proto_rawDescData)
	})
	return file_v1_environment_service_proto_rawDescData
}

var file_v1_environment_service_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_v1_environment_service_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_v1_environment_service_proto_goTypes = []any{
	(EnvironmentTier)(0),               // 0: bytebase.v1.EnvironmentTier
	(*GetEnvironmentRequest)(nil),      // 1: bytebase.v1.GetEnvironmentRequest
	(*ListEnvironmentsRequest)(nil),    // 2: bytebase.v1.ListEnvironmentsRequest
	(*ListEnvironmentsResponse)(nil),   // 3: bytebase.v1.ListEnvironmentsResponse
	(*CreateEnvironmentRequest)(nil),   // 4: bytebase.v1.CreateEnvironmentRequest
	(*UpdateEnvironmentRequest)(nil),   // 5: bytebase.v1.UpdateEnvironmentRequest
	(*DeleteEnvironmentRequest)(nil),   // 6: bytebase.v1.DeleteEnvironmentRequest
	(*UndeleteEnvironmentRequest)(nil), // 7: bytebase.v1.UndeleteEnvironmentRequest
	(*Environment)(nil),                // 8: bytebase.v1.Environment
	(*fieldmaskpb.FieldMask)(nil),      // 9: google.protobuf.FieldMask
	(State)(0),                         // 10: bytebase.v1.State
	(*emptypb.Empty)(nil),              // 11: google.protobuf.Empty
}
var file_v1_environment_service_proto_depIdxs = []int32{
	8,  // 0: bytebase.v1.ListEnvironmentsResponse.environments:type_name -> bytebase.v1.Environment
	8,  // 1: bytebase.v1.CreateEnvironmentRequest.environment:type_name -> bytebase.v1.Environment
	8,  // 2: bytebase.v1.UpdateEnvironmentRequest.environment:type_name -> bytebase.v1.Environment
	9,  // 3: bytebase.v1.UpdateEnvironmentRequest.update_mask:type_name -> google.protobuf.FieldMask
	10, // 4: bytebase.v1.Environment.state:type_name -> bytebase.v1.State
	0,  // 5: bytebase.v1.Environment.tier:type_name -> bytebase.v1.EnvironmentTier
	1,  // 6: bytebase.v1.EnvironmentService.GetEnvironment:input_type -> bytebase.v1.GetEnvironmentRequest
	2,  // 7: bytebase.v1.EnvironmentService.ListEnvironments:input_type -> bytebase.v1.ListEnvironmentsRequest
	4,  // 8: bytebase.v1.EnvironmentService.CreateEnvironment:input_type -> bytebase.v1.CreateEnvironmentRequest
	5,  // 9: bytebase.v1.EnvironmentService.UpdateEnvironment:input_type -> bytebase.v1.UpdateEnvironmentRequest
	6,  // 10: bytebase.v1.EnvironmentService.DeleteEnvironment:input_type -> bytebase.v1.DeleteEnvironmentRequest
	7,  // 11: bytebase.v1.EnvironmentService.UndeleteEnvironment:input_type -> bytebase.v1.UndeleteEnvironmentRequest
	8,  // 12: bytebase.v1.EnvironmentService.GetEnvironment:output_type -> bytebase.v1.Environment
	3,  // 13: bytebase.v1.EnvironmentService.ListEnvironments:output_type -> bytebase.v1.ListEnvironmentsResponse
	8,  // 14: bytebase.v1.EnvironmentService.CreateEnvironment:output_type -> bytebase.v1.Environment
	8,  // 15: bytebase.v1.EnvironmentService.UpdateEnvironment:output_type -> bytebase.v1.Environment
	11, // 16: bytebase.v1.EnvironmentService.DeleteEnvironment:output_type -> google.protobuf.Empty
	8,  // 17: bytebase.v1.EnvironmentService.UndeleteEnvironment:output_type -> bytebase.v1.Environment
	12, // [12:18] is the sub-list for method output_type
	6,  // [6:12] is the sub-list for method input_type
	6,  // [6:6] is the sub-list for extension type_name
	6,  // [6:6] is the sub-list for extension extendee
	0,  // [0:6] is the sub-list for field type_name
}

func init() { file_v1_environment_service_proto_init() }
func file_v1_environment_service_proto_init() {
	if File_v1_environment_service_proto != nil {
		return
	}
	file_v1_annotation_proto_init()
	file_v1_common_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_environment_service_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_v1_environment_service_proto_goTypes,
		DependencyIndexes: file_v1_environment_service_proto_depIdxs,
		EnumInfos:         file_v1_environment_service_proto_enumTypes,
		MessageInfos:      file_v1_environment_service_proto_msgTypes,
	}.Build()
	File_v1_environment_service_proto = out.File
	file_v1_environment_service_proto_rawDesc = nil
	file_v1_environment_service_proto_goTypes = nil
	file_v1_environment_service_proto_depIdxs = nil
}
