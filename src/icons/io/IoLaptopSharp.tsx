

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLaptopSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M477.29,400A27.75,27.75,0,0,0,480,388V108a28,28,0,0,0-28-28H60a28,28,0,0,0-28,28V388a27.75,27.75,0,0,0,2.71,12H0v32H512V400Z" />
        </G>
      </Svg>
    );
  }

