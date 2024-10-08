/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ReleaseFileType, releaseFileTypeFromJSON, releaseFileTypeToJSON, releaseFileTypeToNumber } from "./release";

export const protobufPackage = "bytebase.store";

export interface RevisionPayload {
  /**
   * Format: projects/{project}/releases/{release}
   * Can be empty.
   */
  release: string;
  /**
   * The sheet that holds the content.
   * Format: projects/{project}/sheets/{sheet}
   */
  sheet: string;
  /** The SHA1 hash value of the sheet. */
  sheetSha1: string;
  type: ReleaseFileType;
  version: string;
  /**
   * The name of the file in the release.
   * Expressed as a path, e.g. `2.2/V0001_create_table.sql`
   * Can be empty.
   */
  file: string;
  /**
   * The task run associated with the revision.
   * Can be empty.
   */
  taskRun: string;
}

function createBaseRevisionPayload(): RevisionPayload {
  return {
    release: "",
    sheet: "",
    sheetSha1: "",
    type: ReleaseFileType.TYPE_UNSPECIFIED,
    version: "",
    file: "",
    taskRun: "",
  };
}

export const RevisionPayload = {
  encode(message: RevisionPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.release !== "") {
      writer.uint32(10).string(message.release);
    }
    if (message.sheet !== "") {
      writer.uint32(18).string(message.sheet);
    }
    if (message.sheetSha1 !== "") {
      writer.uint32(26).string(message.sheetSha1);
    }
    if (message.type !== ReleaseFileType.TYPE_UNSPECIFIED) {
      writer.uint32(32).int32(releaseFileTypeToNumber(message.type));
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.file !== "") {
      writer.uint32(50).string(message.file);
    }
    if (message.taskRun !== "") {
      writer.uint32(58).string(message.taskRun);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RevisionPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevisionPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.release = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sheet = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sheetSha1 = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.type = releaseFileTypeFromJSON(reader.int32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.version = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.file = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.taskRun = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RevisionPayload {
    return {
      release: isSet(object.release) ? globalThis.String(object.release) : "",
      sheet: isSet(object.sheet) ? globalThis.String(object.sheet) : "",
      sheetSha1: isSet(object.sheetSha1) ? globalThis.String(object.sheetSha1) : "",
      type: isSet(object.type) ? releaseFileTypeFromJSON(object.type) : ReleaseFileType.TYPE_UNSPECIFIED,
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      file: isSet(object.file) ? globalThis.String(object.file) : "",
      taskRun: isSet(object.taskRun) ? globalThis.String(object.taskRun) : "",
    };
  },

  toJSON(message: RevisionPayload): unknown {
    const obj: any = {};
    if (message.release !== "") {
      obj.release = message.release;
    }
    if (message.sheet !== "") {
      obj.sheet = message.sheet;
    }
    if (message.sheetSha1 !== "") {
      obj.sheetSha1 = message.sheetSha1;
    }
    if (message.type !== ReleaseFileType.TYPE_UNSPECIFIED) {
      obj.type = releaseFileTypeToJSON(message.type);
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.file !== "") {
      obj.file = message.file;
    }
    if (message.taskRun !== "") {
      obj.taskRun = message.taskRun;
    }
    return obj;
  },

  create(base?: DeepPartial<RevisionPayload>): RevisionPayload {
    return RevisionPayload.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RevisionPayload>): RevisionPayload {
    const message = createBaseRevisionPayload();
    message.release = object.release ?? "";
    message.sheet = object.sheet ?? "";
    message.sheetSha1 = object.sheetSha1 ?? "";
    message.type = object.type ?? ReleaseFileType.TYPE_UNSPECIFIED;
    message.version = object.version ?? "";
    message.file = object.file ?? "";
    message.taskRun = object.taskRun ?? "";
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
