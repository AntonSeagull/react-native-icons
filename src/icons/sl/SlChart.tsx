

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SlChart = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 1024 1024"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 512, 512)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M272.064 319.984H48c-17.68 0-32 14.32-32 32V992c0 17.68 14.32 32 32 32h224.064c17.68 0 32-14.32 32-32V351.984c0-17.68-14.32-32-32-32zm-32 640.016H80V383.984h160.064V960zm383.68-449.744h-224.08c-17.68 0-32 14.32-32 32V992c0 17.68 14.32 32 32 32h224.08c17.68 0 32-14.32 32-32V542.256c0-17.696-14.304-32-32-32zm-32 449.744h-160.08V574.256h160.08V960zM976 0H752.272c-17.68 0-32 14.32-32 32v960c0 17.68 14.32 32 32 32H976c17.68 0 32-14.32 32-32V32c0-17.68-14.32-32-32-32zm-32 960H784.272V64H944v896z" />
        </G>
      </Svg>
    );
  }

