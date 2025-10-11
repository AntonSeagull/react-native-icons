

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscSymbolConstant = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M4 6h8v1H4V6zm8 3H4v1h8V9z" />
          <Path d="M1 4l1-1h12l1 1v8l-1 1H2l-1-1V4zm1 0v8h12V4H2z" />
        </G>
      </Svg>
    );
  }

