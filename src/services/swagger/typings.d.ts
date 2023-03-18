declare namespace API {
  type Asset = {
    id: number;
    bucket: CosBucket;
    objectUrl: {
      webp: string;
      original: string;
      thumbnail_300_: string;
      thumbnail_700_: string;
      thumbnail_blur_: string;
    };
    originUrl: string;
    sn: string;
    tags: string[];
    comment: string;
    /** 需要注意，这里的值是不带 `.` 的 */
    fileSuffix: string;
    sha1: string;
    pHash: string;
    exif: Record<string, any>;
    metadata: Record<string, any>;
    size: { width: number; height: number };
    uploadBy: User;
    createdAt: string;
    updatedAt: string;
  };

  type ChatGPTPayload = {
    message: string;
    parentMessageId?: string;
    conversationId?: string;
  };

  type CosBucket = {
    /** bucket 在系统中的名称 */
    name: string;
    id: number;
    Bucket: string;
    Region: string;
    ACL: Record<string, any>;
    CORSRules: Record<string, any>[];
    RefererConfiguration: Record<string, any>;
    createdAt: string;
    updatedAt: string;
    tencentCloudAccount: Record<string, any>;
    assets: Asset[];
    public: boolean;
  };

  type CreateBucketDto = {
    /** bucket 在系统中的名称 */
    name?: string;
    Region: string;
    tencentCloudAccount: Record<string, any>;
    id?: number;
    Bucket?: string;
    ACL?: Record<string, any>;
    CORSRules?: Record<string, any>[];
    RefererConfiguration?: Record<string, any>;
    createdAt?: string;
    updatedAt?: string;
    assets?: Asset[];
    public?: boolean;
  };

  type CreateFeedDto = {
    /** timeline item content */
    content: string;
    assets: any[];
    public?: boolean;
    createBy: User;
  };

  type CreatePostDto = {
    title: string;
    content: string;
    posterId?: number;
    summary?: string;
    tags?: string[];
    public?: boolean;
    publishYear?: number;
    createBy?: User;
    updateBy?: User;
    poster?: Asset;
    logs?: PostLog[];
    createdAt?: string;
    updatedAt?: string;
  };

  type CreateRoleDto = {
    /** 角色名称 */
    name: string;
    /** 权限列表 */
    permissions: string[];
    /** 角色拥有的菜单 */
    menus?: number[];
  };

  type CreateTencentCloudAccountDto = {
    name: string;
    SecretId: string;
    SecretKey: string;
    AppId: string;
    id?: number;
    buckets?: CosBucket[];
  };

  type deleteFeedByIdParams = {
    id: number;
  };

  type deleteMenuByIdParams = {
    id: string;
  };

  type deletePostParams = {
    id: number;
  };

  type deleteRoleByIdParams = {
    id: number;
  };

  type editUserByIdParams = {
    id: string;
  };

  type EditUserDto = {
    /** User email */
    email: string;
    nickname: string;
    bio: string;
    avatar?: string;
  };

  type Family = {
    id: number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    members: User[];
  };

  type Feed = {
    /** timeline item id */
    id: number;
    /** timeline item content */
    content: string;
    /** timeline item assets */
    assets: Asset[];
    public: boolean;
    createBy: User;
    updateBy: User;
    createdAt: string;
    updatedAt: string;
  };

  type FeedControllerRemoveParams = {
    /** timeline item id */
    id: number;
  };

  type GithubControllerGetUserInfoParams = {
    login: string;
  };

  type infiniteQueryPublicAssetParams = {
    prevCursor?: string;
    nextCursor?: string;
    take?: number;
  };

  type infiniteQueryPublicTimelineParams = {
    prevCursor?: string;
    nextCursor?: string;
    take?: number;
  };

  type InfiniteQueryResponse = {
    prevCursor?: number;
    nextCursor?: number;
  };

  type LogsViewerControllerListLogsParams = {
    container: string;
  };

  type Menu = {
    id: number;
    name: string;
    path: string;
    children: Menu[];
    parent: Menu;
    parentId: number;
    createdAt: string;
    updatedAt: string;
  };

  type MiniProgramControllerCode2SessionParams = {
    code: string;
  };

  type OauthApplication = {
    id: number;
    platformName: 'google' | 'github' | 'test';
    clientId: string;
    clientSecret: string;
    callbackUrl: string;
    createdAt: string;
    updatedAt: string;
  };

  type OauthOpenid = {
    id: number;
    application: OauthApplication;
    openid: string;
    user: User;
    createdAt: string;
    updatedAt: string;
  };

  type PatchPostDto = {
    title: string;
    content: string;
    posterId?: number;
    summary?: string;
    tags?: string[];
    public?: boolean;
    publishYear?: number;
    createBy?: User;
    updateBy?: User;
    poster?: Asset;
    logs?: PostLog[];
    createdAt?: string;
    updatedAt?: string;
  };

  type Post = {
    id: number;
    title: string;
    content: string;
    summary: string;
    tags: string[];
    public: boolean;
    publishYear: number;
    createBy: User;
    updateBy: User;
    poster: Asset;
    logs: PostLog[];
    createdAt: string;
    updatedAt: string;
  };

  type PostLog = {
    id: number;
    post: Post;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  };

  type PushSubscriptionJSON = {
    endpoint?: string;
    expirationTime?: number;
    keys?: Record<string, any>;
  };

  type PushSubscriptionLog = {
    id: number;
    pushSubscriptionJSON: Record<string, any>;
    endpoint: string;
    user?: User;
    createdAt: string;
    updatedAt: string;
  };

  type queryAssetsParams = {
    /** 每页条数 */
    pageSize: number;
    /** 当前页码 */
    current: number;
    createdAt?: string[];
    updatedAt?: string[];
    id: number;
    sha1: string;
    originUrl: string;
  };

  type queryFeedsParams = {
    /** 每页条数 */
    pageSize: number;
    /** 当前页码 */
    current: number;
    /** timeline item id */
    id: number;
  };

  type queryMenuByIdParams = {
    id: string;
  };

  type queryMenusParams = {
    /** 每页条数 */
    pageSize: number;
    /** 当前页码 */
    current: number;
    id: number;
    name: string;
    path: string;
    createdAt?: string[];
    updatedAt?: string[];
  };

  type QueryPostsDto = {
    /** 每页条数 */
    pageSize: number;
    /** 当前页码 */
    current: number;
    id: number;
    /** 创建时间 */
    createdAt: string[];
    /** 更新时间 */
    updatedAt: string[];
    title: string;
    content: string;
    public: boolean;
    summary: string;
    poster: Asset;
    createBy: User;
  };

  type queryPublicAssetByIdParams = {
    id: string;
  };

  type queryPublicPostByIdParams = {
    id: number;
    versions: string[];
  };

  type queryPublicPostsParams = {
    publishYear?: number;
  };

  type queryRoleByIdParams = {
    id: string;
  };

  type queryRolesParams = {
    /** 每页条数 */
    pageSize: number;
    /** 当前页码 */
    current: number;
    id: number;
    name: string;
    createdAt?: string[];
    updatedAt?: string[];
  };

  type queryUserByIdParams = {
    id: string;
  };

  type queryUsersParams = {
    /** 每页条数 */
    pageSize: number;
    /** 当前页码 */
    current: number;
    /** User id */
    id: number;
    /** User email */
    email: string;
    nickname: string;
    bio: string;
    /** 创建时间 */
    createdAt?: string[];
    /** 更新时间 */
    updatedAt?: string[];
  };

  type RandomControllerGetAvatarParams = {
    uuid: string;
    size: string;
  };

  type Role = {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    /** 菜单列表 */
    menus: Menu[];
    /** 权限列表 */
    permissions: string[];
  };

  type saveAssetToBucketParams = {
    bucketName: string;
  };

  type triggerScheduleParams = {
    scheduleType: string;
  };

  type UpdateFeedDto = {
    /** timeline item content */
    content: string;
    assets: any[];
    id: number;
    public: boolean;
    updateBy: User;
  };

  type updatePostParams = {
    id: number;
  };

  type UploadAssetsDto = {
    assets: any[];
  };

  type User = {
    /** User id */
    id: number;
    /** User email */
    email: string;
    nickname: string;
    bio: string;
    avatar?: string;
    lastIp: string;
    lastAddress: string;
    createdAt: string;
    updatedAt: string;
    timelineBackground: Asset;
    /** User roles */
    roles: Role[];
    families: Family[];
    oauthOpenidArr: OauthOpenid[];
    saltedPassword: string;
    salt: string;
  };

  type UserLoginDto = {
    /** User email */
    email: string;
    /** User password */
    password: string;
  };

  type ViewCountDto = {
    createdAt: string;
    requestCount: number;
    distinctIpCount: number;
  };
}
