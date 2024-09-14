/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "bytebase.store";

export interface GroupMember {
  /**
   * Member is the principal who belong to this group.
   *
   * Format: users/{userUID}.
   */
  member: string;
  role: GroupMember_Role;
}

export enum GroupMember_Role {
  ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED",
  OWNER = "OWNER",
  MEMBER = "MEMBER",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function groupMember_RoleFromJSON(object: any): GroupMember_Role {
  switch (object) {
    case 0:
    case "ROLE_UNSPECIFIED":
      return GroupMember_Role.ROLE_UNSPECIFIED;
    case 1:
    case "OWNER":
      return GroupMember_Role.OWNER;
    case 2:
    case "MEMBER":
      return GroupMember_Role.MEMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GroupMember_Role.UNRECOGNIZED;
  }
}

export function groupMember_RoleToJSON(object: GroupMember_Role): string {
  switch (object) {
    case GroupMember_Role.ROLE_UNSPECIFIED:
      return "ROLE_UNSPECIFIED";
    case GroupMember_Role.OWNER:
      return "OWNER";
    case GroupMember_Role.MEMBER:
      return "MEMBER";
    case GroupMember_Role.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function groupMember_RoleToNumber(object: GroupMember_Role): number {
  switch (object) {
    case GroupMember_Role.ROLE_UNSPECIFIED:
      return 0;
    case GroupMember_Role.OWNER:
      return 1;
    case GroupMember_Role.MEMBER:
      return 2;
    case GroupMember_Role.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface GroupPayload {
  members: GroupMember[];
  /** source means where the group comes from. For now we support Entra ID SCIM sync, so the source could be Entra ID. */
  source: string;
}

function createBaseGroupMember(): GroupMember {
  return { member: "", role: GroupMember_Role.ROLE_UNSPECIFIED };
}

export const GroupMember = {
  encode(message: GroupMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.role !== GroupMember_Role.ROLE_UNSPECIFIED) {
      writer.uint32(16).int32(groupMember_RoleToNumber(message.role));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.member = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.role = groupMember_RoleFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupMember {
    return {
      member: isSet(object.member) ? globalThis.String(object.member) : "",
      role: isSet(object.role) ? groupMember_RoleFromJSON(object.role) : GroupMember_Role.ROLE_UNSPECIFIED,
    };
  },

  toJSON(message: GroupMember): unknown {
    const obj: any = {};
    if (message.member !== "") {
      obj.member = message.member;
    }
    if (message.role !== GroupMember_Role.ROLE_UNSPECIFIED) {
      obj.role = groupMember_RoleToJSON(message.role);
    }
    return obj;
  },

  create(base?: DeepPartial<GroupMember>): GroupMember {
    return GroupMember.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GroupMember>): GroupMember {
    const message = createBaseGroupMember();
    message.member = object.member ?? "";
    message.role = object.role ?? GroupMember_Role.ROLE_UNSPECIFIED;
    return message;
  },
};

function createBaseGroupPayload(): GroupPayload {
  return { members: [], source: "" };
}

export const GroupPayload = {
  encode(message: GroupPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.members) {
      GroupMember.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(18).string(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.members.push(GroupMember.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.source = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupPayload {
    return {
      members: globalThis.Array.isArray(object?.members) ? object.members.map((e: any) => GroupMember.fromJSON(e)) : [],
      source: isSet(object.source) ? globalThis.String(object.source) : "",
    };
  },

  toJSON(message: GroupPayload): unknown {
    const obj: any = {};
    if (message.members?.length) {
      obj.members = message.members.map((e) => GroupMember.toJSON(e));
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    return obj;
  },

  create(base?: DeepPartial<GroupPayload>): GroupPayload {
    return GroupPayload.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GroupPayload>): GroupPayload {
    const message = createBaseGroupPayload();
    message.members = object.members?.map((e) => GroupMember.fromPartial(e)) || [];
    message.source = object.source ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
