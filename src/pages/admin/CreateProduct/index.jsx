import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Select, InputNumber, Space, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";

import { ROUTES } from "../../../constant/routes";

import {
  createProductAction,
  getCategoryListAction,
  getDiametterListAction,
  getGenderListAction,
} from "../../../redux/actions";
import * as S from "./styles";

const CreateProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [createForm] = Form.useForm();

  const { categoryList } = useSelector((state) => state.category);
  const { createProductData } = useSelector((state) => state.product);
  const { diametterList } = useSelector((state) => state.diametter);
  const { genderList } = useSelector((state) => state.gender);

  const initialValues = {
    name: "",
    price: undefined,
    codeNumber: "",
    gender: "",
    diametter: "",
    categoryId: undefined,
    content: "",
    images: [],
  };

  useEffect(() => {
    dispatch(
      getCategoryListAction(),
      dispatch(getDiametterListAction()),
      dispatch(getGenderListAction())
    );
  }, []);

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleCreateProduct = async (values) => {
    const { images, ...productValues } = values;
    const newImages = [];
    for (let i = 0; i < images.length; i++) {
      const imgBase64 = await convertImageToBase64(images[i].originFileObj);
      await newImages.push({
        name: images[i].name,
        type: images[i].type,
        thumbUrl: images[i].thumbUrl,
        url: imgBase64,
      });
    }
    dispatch(
      createProductAction({
        data: productValues,
        images: newImages,
        callback: () => navigate(ROUTES.ADMIN.PRODUCT_MANAGEMENT),
      })
    );
  };

  const renderProductOptions = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.id}>
          {item.name}
        </Select.Option>
      );
    });
  }, [categoryList.data]);
  const renderDiametterOptions = useMemo(() => {
    return diametterList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.id}>
          {item.size}
        </Select.Option>
      );
    });
  }, [diametterList.data]);

  const renderGenderOptions = useMemo(() => {
    return genderList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.id}>
          {item.gender}
        </Select.Option>
      );
    });
  }, [genderList.data]);

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h3>Create Product</h3>
        <S.styleCreate
          type="primary"
          loading={createProductData.load}
          onClick={() => createForm.submit()}
        >
          Create
        </S.styleCreate>
      </S.TopWrapper>
      <Form
        form={createForm}
        layout="vertical"
        initialValues={initialValues}
        onFinish={(values) => handleCreateProduct(values)}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          style={{ width: "100%" }}
          label="Category"
          name="categoryId"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Select>{renderProductOptions}</Select>
        </Form.Item>
        <Form.Item
          style={{ width: "100%" }}
          label="Diametter"
          name="diametterId"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Select>{renderDiametterOptions}</Select>
        </Form.Item>
        <Form.Item
          style={{ width: "100%" }}
          label="Gender"
          name="genderId"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Select>{renderGenderOptions}</Select>
        </Form.Item>

        <Space>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Required!" }]}
          >
            <InputNumber
              formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              style={{ width: 200 }}
            />
          </Form.Item>
          <span>USD</span>
        </Space>
        <Form.Item
          label="Images"
          name="images"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) return e;
            return e?.fileList;
          }}
        >
          <Upload listType="picture-card" beforeUpload={Upload.LIST_IGNORE}>
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Content" name="content">
          <ReactQuill
            theme="snow"
            onChange={(value) => {
              createForm.setFieldsValue({ content: value });
            }}
          />
        </Form.Item>
      </Form>
    </S.Wrapper>
  );
};

export default CreateProductPage;
