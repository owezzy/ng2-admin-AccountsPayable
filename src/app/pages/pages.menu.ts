export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      {
        path: 'accounts-payable',
        data: {
          menu: {
            title: 'Accounts Payable',
            icon: 'ion-gear-a',
            pathMatch: 'prefix',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
        children: [
          {
            path: 'home',
            data: {
              menu: {
                title: 'Dashboard',
              },
            },
          },
          {
            path: 'customer',
            data: {
              menu: {
                title: 'Customer',
              },
            },
            children: [
              {
                path: 'create',
                data: {
                  menu: {
                    title: 'New Customer',
                  },
                },
              },
              {
                path: 'all',
                data: {
                  menu: {
                    title: 'All Customer',
                  },
                },
              },
            ],
          },

          {
            path: 'product',
            data: {
              menu: {
                title: 'product',
              },
            },
          },
          {
            path: 'invoice',
            data: {
              menu: {
                title: 'All Invoices',
              },
            },
            children:
              [
                {
                  path: 'all',
                  data: {
                    menu: {
                      title: 'All Invoice',
                    },
                  },
                },
                {
                  path: 'recent',
                  data: {
                    menu: {
                      title: 'Recent Invoice',
                    },
                  },
                }],
          },

        ],
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'general.menu.editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          },
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'general.menu.ck_editor',
              },
            },
          },
        ],
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'general.menu.charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          },
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'general.menu.chartist_js',
              },
            },
          },
        ],
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'general.menu.form_elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          },
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'general.menu.form_inputs',
              },
            },
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'general.menu.form_layouts',
              },
            },
          },
        ],
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'general.menu.tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          },
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'general.menu.basic_tables',
              },
            },
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'general.menu.smart_tables',
              },
            },
          },
        ],
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'general.menu.maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          },
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'general.menu.google_maps',
              },
            },
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'general.menu.leaflet_maps',
              },
            },
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'general.menu.bubble_maps',
              },
            },
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'general.menu.line_maps',
              },
            },
          },
        ],
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          },
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'general.menu.login',
              },
            },
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'general.menu.register',
              },
            },
          },
        ],
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.menu_level_1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          },
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_1',
                url: '#',
              },
            },
          },
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_2',
                url: '#',
              },
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'general.menu.menu_level_1_2_1',
                    url: '#',
                  },
                },
              },
            ],
          },
        ],
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.external_link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank',
          },
        },
      },
    ],
  },
];
