//! Root container is the root node in the widget tree.

use crate::coord::*;
use crate::inode_generate_impl;
use crate::ui::tree::*;
use crate::ui::widget::Widgetable;

#[derive(Debug, Clone, Copy)]
/// Root container.
pub struct RootContainer {
  base: InodeBase,
}

impl RootContainer {
  pub fn new(shape: IRect) -> Self {
    RootContainer {
      base: InodeBase::new(shape),
    }
  }
}

inode_generate_impl!(RootContainer, base);

impl Widgetable for RootContainer {}
