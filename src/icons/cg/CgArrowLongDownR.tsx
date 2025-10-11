

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowLongDownR = (props: IconProps) => {

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
          <Path d="M16.2416 4.64146L11.9989 0.398819L7.75629 4.64146L11.0003 7.88551L11.013 19.7865L9.16846 17.9523L7.75821 19.3704L12.0127 23.6012L16.2437 19.3466L14.8255 17.9363L13.013 19.7591L13.0003 7.8827L16.2416 4.64146ZM10.5847 4.64146L11.9989 3.22725L13.4131 4.64146L11.9989 6.05567L10.5847 4.64146Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

