// Автосгенерированный клиент API
// Сгенерировано из https://noks.das-uty.uz/api/v1/docs-json

import type { paths } from './apiMethods.types';
export const apiMethods = (options?: any) => {
  return {
    EXodim: {
      EXodimController_getalldept: () => useApi<paths['/api/v1/e-xodim/departments']['get']['responses']['200']>('/api/v1/e-xodim/departments', { method: 'GET', ...options }),
    },
    auth: {
      login: (body: paths['/api/v1/auth/login']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/auth/login']['post']['responses']['default']>(`/api/v1/auth/login`, { method: 'POST', body: body, ...options }),
      refresh: () => useApi<paths['/api/v1/auth/refresh']['post']['responses']['201']>('/api/v1/auth/refresh', { method: 'POST', ...options }),
      logout: () => useApi<paths['/api/v1/auth/logout']['post']['responses']['201']>('/api/v1/auth/logout', { method: 'POST', ...options }),
      change_password: (body: paths['/api/v1/auth/change-password']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/auth/change-password']['post']['responses']['201']>(`/api/v1/auth/change-password`, { method: 'POST', body: body, ...options }),
    },
    Users: {
      UsersController_getAll: () => useApi<paths['/api/v1/users']['get']['responses']['200']>('/api/v1/users', { method: 'GET', ...options }),
      UsersController_create: (body: paths['/api/v1/users']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/users']['post']['responses']['201']>(`/api/v1/users`, { method: 'POST', body: body, ...options }),
    },
    profile: {
      me: () => useApi<paths['/api/v1/profile/me']['get']['responses']['200']>('/api/v1/profile/me', { method: 'GET', ...options }),
    },
    Roles: {
      RolesController_create: (body: paths['/api/v1/roles']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/roles']['post']['responses']['201']>(`/api/v1/roles`, { method: 'POST', body: body, ...options }),
      RolesController_getAll: () => useApi<paths['/api/v1/roles/getAllPermissions']['get']['responses']['200']>('/api/v1/roles/getAllPermissions', { method: 'GET', ...options }),
      RolesController_addPermissionsToRole: (id: string | number, body: paths['/api/v1/roles/{id}/permissions']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/roles/{id}/permissions']['post']['responses']['201']>(`/api/v1/roles/${id}/permissions`, { method: 'POST', body: body, ...options }),
    },
    Objects: {
      ObjectsController_findAll: (query?: paths['/api/v1/objects']['get']['parameters']['query']) => useApi<paths['/api/v1/objects']['get']['responses']['default']['content']['application/json']>(`/api/v1/objects`, { method: 'GET', params: query, ...options }),
      ObjectsController_create: (body: paths['/api/v1/objects']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/objects']['post']['responses']['default']['content']['application/json']>(`/api/v1/objects`, { method: 'POST', body: body, ...options }),
      ObjectsController_addValue: (id: string | number, body: paths['/api/v1/objects/{id}/values']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/objects/{id}/values']['post']['responses']['default']['content']['application/json']>(`/api/v1/objects/${id}/values`, { method: 'POST', body: body, ...options }),
      ObjectsController_findOne: (id: string | number) => useApi<paths['/api/v1/objects/{id}']['get']['responses']['default']['content']['application/json']>(`/api/v1/objects/${id}`, { method: 'GET', ...options }),
      ObjectsController_update: (id: string | number, body: paths['/api/v1/objects/{id}']['patch']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/objects/{id}']['patch']['responses']['default']['content']['application/json']>(`/api/v1/objects/${id}`, { method: 'PATCH', body: body, ...options }),
      ObjectsController_remove: (id: string | number) => useApi<void>(`/api/v1/objects/${id}`, { method: 'DELETE', ...options }),
      ObjectsController_updateValue: (id: string | number, body: paths['/api/v1/objects/values/{id}']['patch']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/objects/values/{id}']['patch']['responses']['default']['content']['application/json']>(`/api/v1/objects/values/${id}`, { method: 'PATCH', body: body, ...options }),
      ObjectsController_assignEmployee: (id: string | number, body: paths['/api/v1/objects/project/{id}/employee/assign']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/objects/project/{id}/employee/assign']['post']['responses']['default']['content']['application/json']>(`/api/v1/objects/project/${id}/employee/assign`, { method: 'POST', body: body, ...options }),
      ObjectsController_listEmployee: (id: string | number) => useApi<paths['/api/v1/objects/project/{id}/employee/list']['get']['responses']['default']['content']['application/json']>(`/api/v1/objects/project/${id}/employee/list`, { method: 'GET', ...options }),
      ObjectsController_removeEmployee: (id: string | number) => useApi<void>(`/api/v1/objects/project/${id}/employee/remove`, { method: 'DELETE', ...options }),
    },
    Infrastructure: {
      getAllInfrastructure: () => useApi<paths['/api/v1/infrastructure']['get']['responses']['200']['content']['application/json']>('/api/v1/infrastructure', { method: 'GET', ...options }),
      createInfrastructure: (body: paths['/api/v1/infrastructure']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/infrastructure']['post']['responses']['201']['content']['application/json']>(`/api/v1/infrastructure`, { method: 'POST', body: body, ...options }),
      getInfrastructureById: (id: string | number) => useApi<paths['/api/v1/infrastructure/{id}']['get']['responses']['200']['content']['application/json']>(`/api/v1/infrastructure/${id}`, { method: 'GET', ...options }),
      updateInfrastructure: (id: string | number, body: paths['/api/v1/infrastructure/{id}']['patch']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/infrastructure/{id}']['patch']['responses']['200']['content']['application/json']>(`/api/v1/infrastructure/${id}`, { method: 'PATCH', body: body, ...options }),
      deleteInfrastructure: (id: string | number) => useApi<void>(`/api/v1/infrastructure/${id}`, { method: 'DELETE', ...options }),
    },
    Constructors: {
      ConstructorsController_findAll: () => useApi<paths['/api/v1/constructors']['get']['responses']['200']>('/api/v1/constructors', { method: 'GET', ...options }),
      ConstructorsController_create: (body: paths['/api/v1/constructors']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/constructors']['post']['responses']['201']>(`/api/v1/constructors`, { method: 'POST', body: body, ...options }),
      ConstructorsController_findOne: (id: string | number) => useApi<paths['/api/v1/constructors/{id}']['get']['responses']['200']>(`/api/v1/constructors/${id}`, { method: 'GET', ...options }),
      ConstructorsController_update: (id: string | number, body: paths['/api/v1/constructors/{id}']['patch']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/constructors/{id}']['patch']['responses']['200']>(`/api/v1/constructors/${id}`, { method: 'PATCH', body: body, ...options }),
      ConstructorsController_remove: (id: string | number) => useApi<void>(`/api/v1/constructors/${id}`, { method: 'DELETE', ...options }),
    },
    WorkType: {
      WorkTypeController_findAll: () => useApi<paths['/api/v1/work-type']['get']['responses']['200']>('/api/v1/work-type', { method: 'GET', ...options }),
      WorkTypeController_create: (body: paths['/api/v1/work-type']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/work-type']['post']['responses']['201']>(`/api/v1/work-type`, { method: 'POST', body: body, ...options }),
      WorkTypeController_findOne: (id: string | number) => useApi<paths['/api/v1/work-type/{id}']['get']['responses']['200']>(`/api/v1/work-type/${id}`, { method: 'GET', ...options }),
      WorkTypeController_update: (id: string | number, body: paths['/api/v1/work-type/{id}']['patch']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/work-type/{id}']['patch']['responses']['200']>(`/api/v1/work-type/${id}`, { method: 'PATCH', body: body, ...options }),
      WorkTypeController_remove: (id: string | number) => useApi<void>(`/api/v1/work-type/${id}`, { method: 'DELETE', ...options }),
    },
    Work: {
      WorkController_createWork: (body: paths['/api/v1/work']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/work']['post']['responses']['201']>(`/api/v1/work`, { method: 'POST', body: body, ...options }),
      WorkController_getAll: () => useApi<paths['/api/v1/work/all']['get']['responses']['200']>('/api/v1/work/all', { method: 'GET', ...options }),
    },
    Smeta: {
      SmetaController_findAll: () => useApi<paths['/api/v1/smeta']['get']['responses']['200']>('/api/v1/smeta', { method: 'GET', ...options }),
      create: (body: paths['/api/v1/smeta']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/smeta']['post']['responses']['default']['content']['application/json']>(`/api/v1/smeta`, { method: 'POST', body: body, ...options }),
      SmetaController_findOne: (id: string | number) => useApi<paths['/api/v1/smeta/{id}']['get']['responses']['200']>(`/api/v1/smeta/${id}`, { method: 'GET', ...options }),
      SmetaController_delete: (id: string | number) => useApi<void>(`/api/v1/smeta/${id}/delete`, { method: 'DELETE', ...options }),
      SmetaController_update: (id: string | number) => useApi<paths['/api/v1/smeta/{id}/update']['patch']['responses']['200']>(`/api/v1/smeta/${id}/update`, { method: 'PATCH', ...options }),
    },
    Measurements: {
      MeasurementsController_findAll: () => useApi<paths['/api/v1/measurements']['get']['responses']['200']>('/api/v1/measurements', { method: 'GET', ...options }),
      MeasurementsController_create: (body: paths['/api/v1/measurements']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/measurements']['post']['responses']['201']>(`/api/v1/measurements`, { method: 'POST', body: body, ...options }),
      MeasurementsController_findOne: (id: string | number) => useApi<paths['/api/v1/measurements/{id}']['get']['responses']['200']>(`/api/v1/measurements/${id}`, { method: 'GET', ...options }),
      MeasurementsController_update: (id: string | number, body: paths['/api/v1/measurements/{id}']['patch']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/measurements/{id}']['patch']['responses']['200']>(`/api/v1/measurements/${id}`, { method: 'PATCH', body: body, ...options }),
      MeasurementsController_remove: (id: string | number) => useApi<void>(`/api/v1/measurements/${id}`, { method: 'DELETE', ...options }),
    },
    Document: {
      DocumentController_findAll: () => useApi<paths['/api/v1/documents']['get']['responses']['default']['content']['application/json']>('/api/v1/documents', { method: 'GET', ...options }),
      DocumentController_createDocument: (body: paths['/api/v1/documents']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/documents']['post']['responses']['default']['content']['application/json']>(`/api/v1/documents`, { method: 'POST', body: body, ...options }),
      DocumentController_searchWagonNumber: (query?: paths['/api/v1/documents/search']['get']['parameters']['query']) => useApi<paths['/api/v1/documents/search']['get']['responses']['default']['content']['application/json']>(`/api/v1/documents/search`, { method: 'GET', params: query, ...options }),
    },
    Plot: {
      PlotController_create: (body: paths['/api/v1/plot']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/plot']['post']['responses']['201']>(`/api/v1/plot`, { method: 'POST', body: body, ...options }),
      PlotController_getTotalEmployees: () => useApi<paths['/api/v1/plot/totalEmployees']['get']['responses']['200']>('/api/v1/plot/totalEmployees', { method: 'GET', ...options }),
      PlotController_getGroupByEmployees: () => useApi<paths['/api/v1/plot/stat/groupByEmployees']['get']['responses']['200']>('/api/v1/plot/stat/groupByEmployees', { method: 'GET', ...options }),
      PlotController_findOne: (id: string | number) => useApi<paths['/api/v1/plot/{id}']['get']['responses']['200']>(`/api/v1/plot/${id}`, { method: 'GET', ...options }),
      PlotController_getEmployeesFromIntegration: (id: string | number) => useApi<paths['/api/v1/plot/{id}/employees']['get']['responses']['200']>(`/api/v1/plot/${id}/employees`, { method: 'GET', ...options }),
      PlotController_addEmployeesToPlot: (body: paths['/api/v1/plot/addEmployees']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/plot/addEmployees']['post']['responses']['201']>(`/api/v1/plot/addEmployees`, { method: 'POST', body: body, ...options }),
    },
    Storage: {
      StorageController_uploadFile: (formData: paths['/api/v1/storage/upload']['post']['requestBody']['content']['multipart/form-data']) => useApi<paths['/api/v1/storage/upload']['post']['responses']['default']['content']['application/json']>(`/api/v1/storage/upload`, { method: 'POST', formData: formData, ...options }),
    },
  };
};
