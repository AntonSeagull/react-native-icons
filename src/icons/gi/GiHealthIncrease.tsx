

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiHealthIncrease = (props: IconProps) => {

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
          <Path d="M196 496c-16.62 0-30-13.38-30-30V346H46c-16.62 0-30-13.38-30-30V196c0-16.62 13.38-30 30-30h120V46c0-16.62 13.38-30 30-30h120c16.62 0 30 13.38 30 30v120h120c16.62 0 30 13.38 30 30v120c0 16.62-13.38 30-30 30H346v120c0 16.62-13.38 30-30 30zm0-135h120l-60-60zm0-75h120l-60-60zm0-75h120l-60-60z" fill="#000" />
        </G>
      </Svg>
    );
  }

