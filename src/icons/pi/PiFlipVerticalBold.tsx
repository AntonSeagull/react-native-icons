

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFlipVerticalBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M56,120H216a20,20,0,0,0,7.79-38.42l-.46-.19L63.51,21.47A20,20,0,0,0,36,40v60A20,20,0,0,0,56,120Zm4-74.21L193.91,96H60ZM216,136H56a20,20,0,0,0-20,20v60a20,20,0,0,0,27.51,18.54l159.81-59.92.46-.19A20,20,0,0,0,216,136ZM60,210.22V160H193.91Z" />
        </G>
      </Svg>
    );
  }

