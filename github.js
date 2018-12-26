class GitHub {
  constructor() {
    this.client_id = 'de3ac121f25c2d5de399';
    this.client_secret = '7a4be04933ea9c424e738735be1d0df1c1001f34';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profileData = await profileResponse.json();

    return {
      profile: profileData
    };
  }
}
