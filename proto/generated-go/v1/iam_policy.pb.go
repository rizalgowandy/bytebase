// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.3
// 	protoc        (unknown)
// source: v1/iam_policy.proto

package v1

import (
	_ "google.golang.org/genproto/googleapis/api/annotations"
	v1alpha1 "google.golang.org/genproto/googleapis/api/expr/v1alpha1"
	expr "google.golang.org/genproto/googleapis/type/expr"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// The type of action performed on a Binding in a policy.
type BindingDelta_Action int32

const (
	BindingDelta_ACTION_UNSPECIFIED BindingDelta_Action = 0
	BindingDelta_ADD                BindingDelta_Action = 1
	BindingDelta_REMOVE             BindingDelta_Action = 2
)

// Enum value maps for BindingDelta_Action.
var (
	BindingDelta_Action_name = map[int32]string{
		0: "ACTION_UNSPECIFIED",
		1: "ADD",
		2: "REMOVE",
	}
	BindingDelta_Action_value = map[string]int32{
		"ACTION_UNSPECIFIED": 0,
		"ADD":                1,
		"REMOVE":             2,
	}
)

func (x BindingDelta_Action) Enum() *BindingDelta_Action {
	p := new(BindingDelta_Action)
	*p = x
	return p
}

func (x BindingDelta_Action) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (BindingDelta_Action) Descriptor() protoreflect.EnumDescriptor {
	return file_v1_iam_policy_proto_enumTypes[0].Descriptor()
}

func (BindingDelta_Action) Type() protoreflect.EnumType {
	return &file_v1_iam_policy_proto_enumTypes[0]
}

func (x BindingDelta_Action) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use BindingDelta_Action.Descriptor instead.
func (BindingDelta_Action) EnumDescriptor() ([]byte, []int) {
	return file_v1_iam_policy_proto_rawDescGZIP(), []int{5, 0}
}

type GetIamPolicyRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// The name of the resource to get the IAM policy.
	// Format: projects/{project}
	// Format: workspaces/{workspace}
	Resource      string `protobuf:"bytes,1,opt,name=resource,proto3" json:"resource,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GetIamPolicyRequest) Reset() {
	*x = GetIamPolicyRequest{}
	mi := &file_v1_iam_policy_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetIamPolicyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetIamPolicyRequest) ProtoMessage() {}

func (x *GetIamPolicyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_iam_policy_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetIamPolicyRequest.ProtoReflect.Descriptor instead.
func (*GetIamPolicyRequest) Descriptor() ([]byte, []int) {
	return file_v1_iam_policy_proto_rawDescGZIP(), []int{0}
}

func (x *GetIamPolicyRequest) GetResource() string {
	if x != nil {
		return x.Resource
	}
	return ""
}

type SetIamPolicyRequest struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// The name of the resource to set the IAM policy.
	// Format: projects/{project}
	// Format: workspaces/{workspace}
	Resource string     `protobuf:"bytes,1,opt,name=resource,proto3" json:"resource,omitempty"`
	Policy   *IamPolicy `protobuf:"bytes,2,opt,name=policy,proto3" json:"policy,omitempty"`
	// The current etag of the policy.
	Etag          string `protobuf:"bytes,3,opt,name=etag,proto3" json:"etag,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *SetIamPolicyRequest) Reset() {
	*x = SetIamPolicyRequest{}
	mi := &file_v1_iam_policy_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SetIamPolicyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SetIamPolicyRequest) ProtoMessage() {}

func (x *SetIamPolicyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_iam_policy_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SetIamPolicyRequest.ProtoReflect.Descriptor instead.
func (*SetIamPolicyRequest) Descriptor() ([]byte, []int) {
	return file_v1_iam_policy_proto_rawDescGZIP(), []int{1}
}

func (x *SetIamPolicyRequest) GetResource() string {
	if x != nil {
		return x.Resource
	}
	return ""
}

func (x *SetIamPolicyRequest) GetPolicy() *IamPolicy {
	if x != nil {
		return x.Policy
	}
	return nil
}

func (x *SetIamPolicyRequest) GetEtag() string {
	if x != nil {
		return x.Etag
	}
	return ""
}

type IamPolicy struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Collection of binding.
	// A binding binds one or more project members to a single project role.
	Bindings []*Binding `protobuf:"bytes,1,rep,name=bindings,proto3" json:"bindings,omitempty"`
	// The current etag of the policy.
	// If an etag is provided and does not match the current etag of the poliy,
	// the call will be blocked and an ABORTED error will be returned.
	Etag          string `protobuf:"bytes,2,opt,name=etag,proto3" json:"etag,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *IamPolicy) Reset() {
	*x = IamPolicy{}
	mi := &file_v1_iam_policy_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *IamPolicy) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IamPolicy) ProtoMessage() {}

func (x *IamPolicy) ProtoReflect() protoreflect.Message {
	mi := &file_v1_iam_policy_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IamPolicy.ProtoReflect.Descriptor instead.
func (*IamPolicy) Descriptor() ([]byte, []int) {
	return file_v1_iam_policy_proto_rawDescGZIP(), []int{2}
}

func (x *IamPolicy) GetBindings() []*Binding {
	if x != nil {
		return x.Bindings
	}
	return nil
}

func (x *IamPolicy) GetEtag() string {
	if x != nil {
		return x.Etag
	}
	return ""
}

type Binding struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// The role that is assigned to the members.
	// Format: roles/{role}
	Role string `protobuf:"bytes,1,opt,name=role,proto3" json:"role,omitempty"`
	// Specifies the principals requesting access for a Bytebase resource.
	// For users, the member should be: user:{email}
	// For groups, the member should be: group:{email}
	Members []string `protobuf:"bytes,2,rep,name=members,proto3" json:"members,omitempty"`
	// The condition that is associated with this binding.
	// If the condition evaluates to true, then this binding applies to the current request.
	// If the condition evaluates to false, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding.
	Condition *expr.Expr `protobuf:"bytes,3,opt,name=condition,proto3" json:"condition,omitempty"`
	// The parsed expression of the condition.
	ParsedExpr    *v1alpha1.Expr `protobuf:"bytes,4,opt,name=parsed_expr,json=parsedExpr,proto3" json:"parsed_expr,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Binding) Reset() {
	*x = Binding{}
	mi := &file_v1_iam_policy_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Binding) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Binding) ProtoMessage() {}

func (x *Binding) ProtoReflect() protoreflect.Message {
	mi := &file_v1_iam_policy_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Binding.ProtoReflect.Descriptor instead.
func (*Binding) Descriptor() ([]byte, []int) {
	return file_v1_iam_policy_proto_rawDescGZIP(), []int{3}
}

func (x *Binding) GetRole() string {
	if x != nil {
		return x.Role
	}
	return ""
}

func (x *Binding) GetMembers() []string {
	if x != nil {
		return x.Members
	}
	return nil
}

func (x *Binding) GetCondition() *expr.Expr {
	if x != nil {
		return x.Condition
	}
	return nil
}

func (x *Binding) GetParsedExpr() *v1alpha1.Expr {
	if x != nil {
		return x.ParsedExpr
	}
	return nil
}

// The difference delta between two policies.
type PolicyDelta struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// The delta for Bindings between two policies.
	BindingDeltas []*BindingDelta `protobuf:"bytes,1,rep,name=binding_deltas,json=bindingDeltas,proto3" json:"binding_deltas,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *PolicyDelta) Reset() {
	*x = PolicyDelta{}
	mi := &file_v1_iam_policy_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *PolicyDelta) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PolicyDelta) ProtoMessage() {}

func (x *PolicyDelta) ProtoReflect() protoreflect.Message {
	mi := &file_v1_iam_policy_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PolicyDelta.ProtoReflect.Descriptor instead.
func (*PolicyDelta) Descriptor() ([]byte, []int) {
	return file_v1_iam_policy_proto_rawDescGZIP(), []int{4}
}

func (x *PolicyDelta) GetBindingDeltas() []*BindingDelta {
	if x != nil {
		return x.BindingDeltas
	}
	return nil
}

// One delta entry for Binding. Each individual change (only one member in each
// entry) to a binding will be a separate entry.
type BindingDelta struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// The action that was performed on a Binding.
	Action BindingDelta_Action `protobuf:"varint,1,opt,name=action,proto3,enum=bytebase.v1.BindingDelta_Action" json:"action,omitempty"`
	// Role that is assigned to `members`.
	// For example, `roles/projectOwner`.
	Role string `protobuf:"bytes,2,opt,name=role,proto3" json:"role,omitempty"`
	// Follows the same format of Binding.members.
	Member string `protobuf:"bytes,3,opt,name=member,proto3" json:"member,omitempty"`
	// The condition that is associated with this binding.
	Condition     *expr.Expr `protobuf:"bytes,4,opt,name=condition,proto3" json:"condition,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *BindingDelta) Reset() {
	*x = BindingDelta{}
	mi := &file_v1_iam_policy_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *BindingDelta) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BindingDelta) ProtoMessage() {}

func (x *BindingDelta) ProtoReflect() protoreflect.Message {
	mi := &file_v1_iam_policy_proto_msgTypes[5]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BindingDelta.ProtoReflect.Descriptor instead.
func (*BindingDelta) Descriptor() ([]byte, []int) {
	return file_v1_iam_policy_proto_rawDescGZIP(), []int{5}
}

func (x *BindingDelta) GetAction() BindingDelta_Action {
	if x != nil {
		return x.Action
	}
	return BindingDelta_ACTION_UNSPECIFIED
}

func (x *BindingDelta) GetRole() string {
	if x != nil {
		return x.Role
	}
	return ""
}

func (x *BindingDelta) GetMember() string {
	if x != nil {
		return x.Member
	}
	return ""
}

func (x *BindingDelta) GetCondition() *expr.Expr {
	if x != nil {
		return x.Condition
	}
	return nil
}

var File_v1_iam_policy_proto protoreflect.FileDescriptor

var file_v1_iam_policy_proto_rawDesc = []byte{
	0x0a, 0x13, 0x76, 0x31, 0x2f, 0x69, 0x61, 0x6d, 0x5f, 0x70, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e,
	0x76, 0x31, 0x1a, 0x25, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x65,
	0x78, 0x70, 0x72, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x73, 0x79, 0x6e,
	0x74, 0x61, 0x78, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x62, 0x65, 0x68, 0x61,
	0x76, 0x69, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x19, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x16, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x74, 0x79,
	0x70, 0x65, 0x2f, 0x65, 0x78, 0x70, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x52, 0x0a,
	0x13, 0x47, 0x65, 0x74, 0x49, 0x61, 0x6d, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x3b, 0x0a, 0x08, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x1f, 0xe2, 0x41, 0x01, 0x02, 0xfa, 0x41, 0x18, 0x12,
	0x16, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x49, 0x41,
	0x4d, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x52, 0x08, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63,
	0x65, 0x22, 0x9c, 0x01, 0x0a, 0x13, 0x53, 0x65, 0x74, 0x49, 0x61, 0x6d, 0x50, 0x6f, 0x6c, 0x69,
	0x63, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3b, 0x0a, 0x08, 0x72, 0x65, 0x73,
	0x6f, 0x75, 0x72, 0x63, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x1f, 0xe2, 0x41, 0x01,
	0x02, 0xfa, 0x41, 0x18, 0x12, 0x16, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x49, 0x41, 0x4d, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x52, 0x08, 0x72, 0x65,
	0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x12, 0x34, 0x0a, 0x06, 0x70, 0x6f, 0x6c, 0x69, 0x63, 0x79,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73,
	0x65, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x61, 0x6d, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x42, 0x04,
	0xe2, 0x41, 0x01, 0x02, 0x52, 0x06, 0x70, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x12, 0x12, 0x0a, 0x04,
	0x65, 0x74, 0x61, 0x67, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x65, 0x74, 0x61, 0x67,
	0x22, 0x51, 0x0a, 0x09, 0x49, 0x61, 0x6d, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x12, 0x30, 0x0a,
	0x08, 0x62, 0x69, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x14, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x69,
	0x6e, 0x64, 0x69, 0x6e, 0x67, 0x52, 0x08, 0x62, 0x69, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x73, 0x12,
	0x12, 0x0a, 0x04, 0x65, 0x74, 0x61, 0x67, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x65,
	0x74, 0x61, 0x67, 0x22, 0xaf, 0x01, 0x0a, 0x07, 0x42, 0x69, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x12,
	0x12, 0x0a, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x72,
	0x6f, 0x6c, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x18, 0x02,
	0x20, 0x03, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x12, 0x2f, 0x0a,
	0x09, 0x63, 0x6f, 0x6e, 0x64, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x11, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x45,
	0x78, 0x70, 0x72, 0x52, 0x09, 0x63, 0x6f, 0x6e, 0x64, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x45,
	0x0a, 0x0b, 0x70, 0x61, 0x72, 0x73, 0x65, 0x64, 0x5f, 0x65, 0x78, 0x70, 0x72, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x65, 0x78, 0x70, 0x72, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x45,
	0x78, 0x70, 0x72, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x03, 0x52, 0x0a, 0x70, 0x61, 0x72, 0x73, 0x65,
	0x64, 0x45, 0x78, 0x70, 0x72, 0x22, 0x4f, 0x0a, 0x0b, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x44,
	0x65, 0x6c, 0x74, 0x61, 0x12, 0x40, 0x0a, 0x0e, 0x62, 0x69, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x5f,
	0x64, 0x65, 0x6c, 0x74, 0x61, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x62,
	0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x69, 0x6e, 0x64, 0x69,
	0x6e, 0x67, 0x44, 0x65, 0x6c, 0x74, 0x61, 0x52, 0x0d, 0x62, 0x69, 0x6e, 0x64, 0x69, 0x6e, 0x67,
	0x44, 0x65, 0x6c, 0x74, 0x61, 0x73, 0x22, 0xdc, 0x01, 0x0a, 0x0c, 0x42, 0x69, 0x6e, 0x64, 0x69,
	0x6e, 0x67, 0x44, 0x65, 0x6c, 0x74, 0x61, 0x12, 0x38, 0x0a, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x20, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61,
	0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x69, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x44, 0x65, 0x6c,
	0x74, 0x61, 0x2e, 0x41, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x12, 0x0a, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x72, 0x6f, 0x6c, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x2f, 0x0a,
	0x09, 0x63, 0x6f, 0x6e, 0x64, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x11, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x45,
	0x78, 0x70, 0x72, 0x52, 0x09, 0x63, 0x6f, 0x6e, 0x64, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x35,
	0x0a, 0x06, 0x41, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x16, 0x0a, 0x12, 0x41, 0x43, 0x54, 0x49,
	0x4f, 0x4e, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00,
	0x12, 0x07, 0x0a, 0x03, 0x41, 0x44, 0x44, 0x10, 0x01, 0x12, 0x0a, 0x0a, 0x06, 0x52, 0x45, 0x4d,
	0x4f, 0x56, 0x45, 0x10, 0x02, 0x42, 0x11, 0x5a, 0x0f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74,
	0x65, 0x64, 0x2d, 0x67, 0x6f, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_v1_iam_policy_proto_rawDescOnce sync.Once
	file_v1_iam_policy_proto_rawDescData = file_v1_iam_policy_proto_rawDesc
)

func file_v1_iam_policy_proto_rawDescGZIP() []byte {
	file_v1_iam_policy_proto_rawDescOnce.Do(func() {
		file_v1_iam_policy_proto_rawDescData = protoimpl.X.CompressGZIP(file_v1_iam_policy_proto_rawDescData)
	})
	return file_v1_iam_policy_proto_rawDescData
}

var file_v1_iam_policy_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_v1_iam_policy_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_v1_iam_policy_proto_goTypes = []any{
	(BindingDelta_Action)(0),    // 0: bytebase.v1.BindingDelta.Action
	(*GetIamPolicyRequest)(nil), // 1: bytebase.v1.GetIamPolicyRequest
	(*SetIamPolicyRequest)(nil), // 2: bytebase.v1.SetIamPolicyRequest
	(*IamPolicy)(nil),           // 3: bytebase.v1.IamPolicy
	(*Binding)(nil),             // 4: bytebase.v1.Binding
	(*PolicyDelta)(nil),         // 5: bytebase.v1.PolicyDelta
	(*BindingDelta)(nil),        // 6: bytebase.v1.BindingDelta
	(*expr.Expr)(nil),           // 7: google.type.Expr
	(*v1alpha1.Expr)(nil),       // 8: google.api.expr.v1alpha1.Expr
}
var file_v1_iam_policy_proto_depIdxs = []int32{
	3, // 0: bytebase.v1.SetIamPolicyRequest.policy:type_name -> bytebase.v1.IamPolicy
	4, // 1: bytebase.v1.IamPolicy.bindings:type_name -> bytebase.v1.Binding
	7, // 2: bytebase.v1.Binding.condition:type_name -> google.type.Expr
	8, // 3: bytebase.v1.Binding.parsed_expr:type_name -> google.api.expr.v1alpha1.Expr
	6, // 4: bytebase.v1.PolicyDelta.binding_deltas:type_name -> bytebase.v1.BindingDelta
	0, // 5: bytebase.v1.BindingDelta.action:type_name -> bytebase.v1.BindingDelta.Action
	7, // 6: bytebase.v1.BindingDelta.condition:type_name -> google.type.Expr
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_v1_iam_policy_proto_init() }
func file_v1_iam_policy_proto_init() {
	if File_v1_iam_policy_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_iam_policy_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_v1_iam_policy_proto_goTypes,
		DependencyIndexes: file_v1_iam_policy_proto_depIdxs,
		EnumInfos:         file_v1_iam_policy_proto_enumTypes,
		MessageInfos:      file_v1_iam_policy_proto_msgTypes,
	}.Build()
	File_v1_iam_policy_proto = out.File
	file_v1_iam_policy_proto_rawDesc = nil
	file_v1_iam_policy_proto_goTypes = nil
	file_v1_iam_policy_proto_depIdxs = nil
}
