declare namespace API {
  type Asset = {
    id: number;
    bucket: CosBucket;
    objectUrl: {
      webp?: string;
      original?: string;
      thumbnail_300_?: string;
      thumbnail_700_?: string;
      thumbnail_blur_?: string;
    };
    originUrl: string;
    sn: string;
    tags: string[];
    comment: string;
    fileSuffix: string;
    sha1: string;
    pHash: string;
    exif: Record<string, any>;
    metadata: Record<string, any>;
    size: any;
    uploadBy: User;
    createdAt: string;
    updatedAt: string;
    alt: string;
  };

  type BucketControllerBackupParams = {
    accountId: string;
  };

  type CosBucket = {
    id: number;
    /** bucket 在系统中的名称 */
    name: string;
    Bucket: string;
    Region: string;
    ACL: Record<string, any>;
    CORSRules: string[];
    RefererConfiguration: Record<string, any>;
    createdAt: string;
    updatedAt: string;
    tencentCloudAccount: TencentCloudAccount;
    assets: Asset[];
    public: boolean;
  };

  type CreateBucketDto = {
    id?: number;
    /** bucket 在系统中的名称 */
    name?: string;
    Bucket?: string;
    Region?: string;
    ACL?: Record<string, any>;
    CORSRules?: string[];
    RefererConfiguration?: Record<string, any>;
    createdAt?: string;
    updatedAt?: string;
    tencentCloudAccount?: TencentCloudAccount;
    assets?: Asset[];
    public?: boolean;
  };

  type CreateFeedDto = {
    content: string;
    createBy: User;
    assets: any[];
    public?: boolean;
  };

  type CreatePostDto = {
    title?: string;
    content?: string;
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
    posterId?: number;
  };

  type CreateRoleDto = {
    /** 角色名称 */
    name: string;
    /** 权限列表 */
    permissions: string[];
    /** 角色拥有的菜单 */
    menus?: string[];
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
    id: number;
    content: string;
    assets: Asset[];
    public: boolean;
    createBy: User;
    updateBy: User;
    createdAt: string;
    updatedAt: string;
  };

  type FeedControllerRemoveParams = {
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

  type infiniteQueryPublicPostParams = {
    prevCursor?: string;
    nextCursor?: string;
    take?: number;
    publishYear?: number;
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

  type Menu = {
    id: number;
    name: string;
    path: string;
    children: Record<string, any>;
    parent: Record<string, any>;
    parentId: number;
    createdAt: string;
    updatedAt: string;
  };

  type MiniProgramControllerCode2SessionParams = {
    code: string;
  };

  type NotificationDto = {
    title: string;
    message: string;
    icon?: string;
    openUrl?: string;
    subscribeId: number;
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

  type OCRDto = {
    images: any[];
  };

  type PaginatedBaseQuery = {
    /** 每页条数 */
    pageSize: number;
    /** 当前页码 */
    current: number;
  };

  type PatchPostDto = {
    title?: string;
    content?: string;
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
    id: number;
    posterId?: number;
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

  type PushSubscriptionJSONDto = {
    endpoint?: string;
    expirationTime?: number;
    keys?: Record<string, any>;
  };

  type PushSubscriptionLog = {
    id: number;
    pushSubscriptionJSON: PushSubscriptionJSONDto;
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
    id: number;
    originUrl: string;
    sha1: string;
    createdAt?: string[];
    updatedAt?: string[];
  };

  type queryFeedsParams = {
    /** 每页条数 */
    pageSize: number;
    /** 当前页码 */
    current: number;
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
    title: string;
    content: string;
    summary: string;
    public: boolean;
    createBy: User;
    poster: Asset;
    /** 创建时间 */
    createdAt: string[];
    /** 更新时间 */
    updatedAt: string[];
  };

  type queryPublicAssetByIdParams = {
    id: string;
  };

  type queryPublicPostByIdParams = {
    id: number;
    versions: string[];
  };

  type QueryRequestLogDto = {
    /** 每页条数 */
    pageSize: number;
    /** 当前页码 */
    current: number;
    /** 创建时间 */
    createdAt: string[];
    /** 更新时间 */
    updatedAt: string[];
    id: number;
    requestId: string;
    ip: string;
    path: string;
    referer: string;
    userAgent: string;
    statusCode: number;
  };

  type queryRoleByIdParams = {
    id: number;
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

  type RequestLog = {
    id: number;
    path: string;
    ip: string;
    ipInfo: string;
    method: string;
    statusCode: number;
    contentLength: string;
    processTime: string;
    referer: string;
    userAgent: string;
    requestId: string;
    createdAt: string;
    updatedAt: string;
  };

  type RequestLogDto = {
    createdAt: string;
    requestCount: number;
    distinctIpCount: number;
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

  type TencentCloudAccount = {
    id: number;
    name: string;
    SecretId: string;
    SecretKey: string;
    AppId: string;
    buckets: CosBucket[];
  };

  type triggerScheduleParams = {
    scheduleType: any;
  };

  type UpdateFeedDto = {
    content: string;
    assets: any[];
    public: boolean;
    updateBy: User;
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
}
