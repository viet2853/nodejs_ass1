import Product from "../model/product";
import Joi from "joi";

const Schema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
});

export const create = async (req, res) => {
  try {
    const { error } = Schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const product = await Product.create(req.body);
    return res.status(200).json({
      message: "Thêm mới thành công",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const product = await Product.find();
    return res.status(200).json({
      message: "Lấy sản phẩm thành công",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const get = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).json({
      message: "Lấy 1 sản phẩm thành công",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
    try {
      const { error } = Schema.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }
      const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new: true});
      return res.status(200).json({
        message: "Update thành công",   
        product,
      });
    } catch (error) {
      return res.status(400).json({
        message: error,
      });
    }
  };

  export const remove = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      return res.status(200).json({
        message: "Xóa sản phẩm thành công",
        product,
      });
    } catch (error) {
      return res.status(400).json({
        message: error,
      });
    }
  };