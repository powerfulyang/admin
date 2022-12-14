declare namespace API {
  type Asset = {
    id: number;
    bucket: CosBucket;
    cosUrl: string;
    objectUrl: string;
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
    size: Record<string, any>;
    uploadBy: User;
    createAt: string;
    updateAt: string;
  };

  type AssetControllerSaveAssetToBucketParams = {
    bucketName: string;
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
    createAt: string;
    updateAt: string;
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
    createAt?: string;
    updateAt?: string;
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
    createBy: User;
    summary?: string;
    tags?: string[];
    public?: boolean;
    publishYear?: number;
    updateBy?: User;
    poster?: Asset;
    logs?: PostLog[];
    createAt?: string;
    updateAt?: string;
  };

  type CreateTencentCloudAccountDto = {
    name: string;
    SecretId: string;
    SecretKey: string;
    AppId: string;
    id?: number;
    buckets?: CosBucket[];
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
    createAt: string;
    updateAt: string;
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
    createAt: string;
    updateAt: string;
  };

  type FeedControllerRemoveParams = {
    /** timeline item id */
    id: number;
  };

  type getPublicAssetByIdParams = {
    id: string;
  };

  type getPublicPostByIdParams = {
    id: number;
    versions: string[];
  };

  type GithubControllerGetUserInfoParams = {
    login: string;
  };

  type infiniteQueryPublicAssetParams = {
    prevCursor: string;
    nextCursor: string;
    take: string;
  };

  type LogsViewerControllerListLogsParams = {
    container: string;
  };

  type Menu = {
    id: number;
    name: string;
    path: string;
    parent: Menu;
    parentId: number;
    createAt: string;
    updateAt: string;
    children: Menu[];
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
    createAt: string;
    updateAt: string;
  };

  type OauthOpenid = {
    id: number;
    application: OauthApplication;
    openid: string;
    user: User;
    createAt: string;
    updateAt: string;
  };

  type PatchPostDto = {
    /** post id */
    id?: number;
    title: string;
    content: string;
    posterId?: number;
    updateBy: User;
    summary?: string;
    tags?: string[];
    public?: boolean;
    publishYear?: number;
    createBy?: User;
    poster?: Asset;
    logs?: PostLog[];
    createAt?: string;
    updateAt?: string;
  };

  type Post = {
    /** post id */
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
    createAt: string;
    updateAt: string;
  };

  type PostControllerDeletePostParams = {
    /** post id */
    id: number;
  };

  type PostControllerUpdatePostParams = {
    /** post id */
    id: number;
  };

  type PostLog = {
    id: number;
    post: Post;
    title: string;
    content: string;
    createAt: string;
    updateAt: string;
  };

  type queryPublicPostsParams = {
    publishYear?: number;
  };

  type queryPublicTimelineParams = {
    prevCursor: string;
    nextCursor: string;
    take: string;
  };

  type queryUserByIdParams = {
    id: string;
  };

  type RandomControllerGetAvatarParams = {
    uuid: string;
    size: string;
  };

  type Role = {
    id: number;
    roleName: string;
    createAt: string;
    updateAt: string;
    /** 菜单列表 */
    menus: Menu[];
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
    createAt: string;
    updateAt: string;
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
    createAt: string;
    requestCount: number;
    distinctIpCount: number;
  };
}
