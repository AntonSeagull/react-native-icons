

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPentagonBottomRight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M10.3301 8.23205L13.6603 4L18.6603 12.6603L15.3301 16.8923L10 17.6603L5 9L10.3301 8.23205ZM8.20908 10.5583L11.4072 10.0975L13.4052 7.5583L16.2512 12.4876L14.2531 15.0268L11.055 15.4876L8.20908 10.5583Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

